import {
  Message,
  SendMessageMutationArgs,
  SendMessageResponse,
} from '../../../types/graph';
import { Resolvers } from "../../../types/resolvers";
import chatData from '../ChatData';

const resolvers: Resolvers = {
  Mutation: {
    SendMessage: (
      _,
      args: SendMessageMutationArgs,
      { req, pubSub },
    ): SendMessageResponse => {
      const { nickname, text } = args;
      const message: Message = {
        nickname,
        text,
        id: Math.floor(Math.random() * 27943671),
        createdAt: new Date().getTime(),
      }
      chatData.addMessage(message);
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