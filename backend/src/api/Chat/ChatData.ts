import {
  Message
} from '../../types/graph';

class ChatData {
  private messages: Message[] = [];

  public constructor() {
    console.log('new ChatData');
  }

  public addMessage(message: Message) {
    this.messages.push(message);
  }

  public getMessages() {
    return this.messages;
  }
}

export default new ChatData();