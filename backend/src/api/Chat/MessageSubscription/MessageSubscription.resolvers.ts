import { withFilter } from "graphql-yoga";

const resolvers = {
  Subscription: {
    MessageSubscription: {
      subscribe: withFilter(
        (_, __, { pubSub }) => {
          return pubSub.asyncIterator("newChatMessage")
        },
        (payload, args, context) => true
      )
    }
  }
}

export default resolvers;