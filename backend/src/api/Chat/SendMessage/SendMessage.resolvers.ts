import {
  Message,
  SendMessageMutationArgs,
  SendMessageResponse,
} from '../../../types/graph';
import { Resolvers } from "../../../types/resolvers";
import chatData from '../ChatData';
import UserData from '../UserData';

const resolvers: Resolvers = {
  Mutation: {
    SendMessage: (
      _,
      args: SendMessageMutationArgs,
      { req, pubSub },
    ): SendMessageResponse => {
      const { userId, text } = args;
      const user = UserData.getUser(userId);
      if (!!user) {
        return {
          ok: false,
          error: 'not found user',
          message: null
        }
      }
      const message: Message = {
        user: UserData.getUser(userId),
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