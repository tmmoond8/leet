import { withFilter } from "graphql-yoga";
const resolvers = {
  Subscription: {
    MessageSubscription: {
      subscribe: withFilter(
        (_, __, { pubSub }) => {
          return pubSub.asyncIterator("newChatMessage")
        },
        (payload, args, context) => {
          return true;
        }
      )
    }
  }
}

export default resolvers;