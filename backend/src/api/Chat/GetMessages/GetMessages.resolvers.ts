import ChatData from '../../../dataManager/ChatManager';
import {
  GetMessagesResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";


const resolvers: Resolvers = {
  Query: {
    GetMessages: (_, __, { req }): GetMessagesResponse => {
      const { user } = req;
      if (!user) {
        return {
          ok: false,
          error: 'need to login',
          messages: null
        }
      }
      return {
        ok: true,
        error: null,
        messages: ChatData.getMessages()
      }
    }
  }
}

export default resolvers;