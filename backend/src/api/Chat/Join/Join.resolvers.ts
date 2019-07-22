import { ChatJoinMutationArgs, ChatJoinResponse, User } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    ChatJoin: (_, args: ChatJoinMutationArgs): ChatJoinResponse => {
      const { nickname } = args;
      const newUser: User = {
        id: Math.floor(Math.random() * 27943673),
        nickname
      }

      return {
        ok: true,
        error: null,
        token: JSON.stringify(newUser)
      }
    }
  }
}

export default resolvers;