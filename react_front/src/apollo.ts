import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink, concat, Operation, split } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { withClientState } from 'apollo-link-state';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import dotenv from 'dotenv';
dotenv.config();

const { protocol, hostname } = window.location;
const API_PORT = process.env.REACT_APP_API_PORT;

const getToken = () => {
  const token = localStorage.getItem('jwt');
  return token || "";
};

const cache = new InMemoryCache();

const authMiddleware = new ApolloLink((operation: Operation, forward: any) => {
  operation.setContext({
    headers: {
      "X-JWT": getToken()
    }
  });
  return forward(operation);
});

const httpLink = new HttpLink({
  uri: `${protocol}//${hostname}:${API_PORT}/graphql`
});

const wsLink = new WebSocketLink({
  options: {
    connectionParams: {
      "X-JWT": getToken()
    },
    reconnect: true
  },
  uri: `ws://${hostname}:${API_PORT}/subscription`
});

const combinedLinks = split(
  ({ query }) => {
    const { kind, operation }: any = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.error(`Unexpected error: ${message}`);
    });
  }
  if (networkError) {
    console.error(`Network error: ${networkError}`);
  }
});

const localStateLink = withClientState({
  cache,
  defaults: {
    auth: {
      __typename: "Auth",
      isLoggedIn: Boolean(localStorage.getItem("jwt"))
    }
  },
  resolvers: {
    Mutation: {
      logUserIn: (_, { token }, { cache: appCache }) => {
        localStorage.setItem("jwt", token);
        cache.writeData({
          data: {
            auth: {
              __typename: "Auth",
              isLoggedIn: true,
            }
          }
        });
        return null;
      },
      logUserOut: (_, __, { cache: appCache }) => {
        localStorage.removeItem("jwt");
        cache.writeData({
          data: {
            auth: {
              __typename: "Auth",
              isLoggedIn: false,
            }
          }
        });
        return null;
      },
    }
  }
});

const apolloClient = new ApolloClient({
  cache,
  link: ApolloLink.from([
    errorLink,
    localStateLink,
    concat(authMiddleware, combinedLinks)
  ])
});

export default apolloClient;