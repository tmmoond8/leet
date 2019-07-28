import userManager from '../../../dataManager/UserManager';
import {
  GetUserResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";


const resolvers: Resolvers = {
  Query: {
    GetUser: (_, __, { req }): GetUserResponse => {
      let { user } = req;
      user = userManager.getUser(user.id);
      if (!user) {
        return {
          ok: false,
          error: 'need to login',
          user: null,
        }
      }
      return {
        ok: true,
        error: null,
        user
      }
    }
  }
}

export default resolvers;