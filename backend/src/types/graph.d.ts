export const typeDefs = ["type Message {\n  id: Int!\n  nickname: String!\n  text: String!\n}\n\ntype File {\n  name: String!\n  children: [File]\n  content: String!\n}\n\ntype Query {\n  GetFile: File\n  GetMessages: GetMessagesResponse!\n}\n\ntype GetMessagesResponse {\n  ok: Boolean!\n  error: String\n  messages: [Message]\n}\n\ntype Subscription {\n  MessageSubscription: Message\n}\n\ntype SendMessageResponse {\n  ok: Boolean!\n  error: String\n  message: Message\n}\n\ntype Mutation {\n  SendMessage(nickname: String!, text: String!): SendMessageResponse!\n}\n"];
/* tslint:disable */

export interface Query {
  GetFile: File | null;
  GetMessages: GetMessagesResponse;
}

export interface File {
  name: string;
  children: Array<File> | null;
  content: string;
}

export interface GetMessagesResponse {
  ok: boolean;
  error: string | null;
  messages: Array<Message> | null;
}

export interface Message {
  id: number;
  nickname: string;
  text: string;
}

export interface Mutation {
  SendMessage: SendMessageResponse;
}

export interface SendMessageMutationArgs {
  nickname: string;
  text: string;
}

export interface SendMessageResponse {
  ok: boolean;
  error: string | null;
  message: Message | null;
}

export interface Subscription {
  MessageSubscription: Message | null;
}
