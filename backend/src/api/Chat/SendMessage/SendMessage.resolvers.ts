import chatManager from '../../../dataManager/ChatManager';
import {
  Message,
  SendMessageMutationArgs,
  SendMessageResponse,
} from '../../../types/graph';
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    SendMessage: (
      _,
      args: SendMessageMutationArgs,
      { req, pubSub },
    ): SendMessageResponse => {
      console.log(req.user);
      const { user } = req;
      const { text } = args;
      if (!!user) {
        return {
          ok: false,
          error: 'not found user',
          message: null
        }
      }
      const message: Message = {
        user,
        text,
        id: Math.floor(Math.random() * 27943671),
        createdAt: new Date().getTime(),
      }
      chatManager.addMessage(message);
      pubSub.publish("newChatMessage", { MessageSubscription: message })
      return {
        ok: true,
        error: null,
        message,
      }
    }
  }
}

export default resolvers;