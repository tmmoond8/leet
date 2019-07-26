import userManager from '../../../dataManager/UserManager'
import { createJWT } from '../../../lib';
import { JoinChatMutationArgs, JoinChatResponse, User } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    JoinChat: (_, args: JoinChatMutationArgs): JoinChatResponse => {
      const { nickname } = args;
      const newUser: User = {
        id: Math.floor(Math.random() * 27943673),
        nickname
      }
      userManager.addUser(newUser);
      return {
        ok: true,
        error: null,
        token: createJWT(newUser.id)
      }
    }
  }
}

export default resolvers;