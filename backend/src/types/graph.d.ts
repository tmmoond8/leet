export const typeDefs = ["type Message {\n  id: Int!\n  user: User!\n  text: String!\n  createdAt: Float!\n}\n\ntype User {\n  id: Int!\n  nickname: String!\n}\n\ntype File {\n  name: String!\n  children: [File]\n  content: String!\n}\n\ntype Query {\n  GetFile: File\n  GetMessages: GetMessagesResponse!\n}\n\ntype GetMessagesResponse {\n  ok: Boolean!\n  error: String\n  messages: [Message]\n}\n\ntype ChatJoinResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  ChatJoin(nickname: String!): ChatJoinResponse!\n  SendMessage(userId: Int!, text: String!): SendMessageResponse!\n}\n\ntype Subscription {\n  MessageSubscription: Message\n}\n\ntype SendMessageResponse {\n  ok: Boolean!\n  error: String\n  message: Message\n}\n"];
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
  user: User;
  text: string;
  createdAt: number;
}

export interface User {
  id: number;
  nickname: string;
}

export interface Mutation {
  ChatJoin: ChatJoinResponse;
  SendMessage: SendMessageResponse;
}

export interface ChatJoinMutationArgs {
  nickname: string;
}

export interface SendMessageMutationArgs {
  userId: number;
  text: string;
}

export interface ChatJoinResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface SendMessageResponse {
  ok: boolean;
  error: string | null;
  message: Message | null;
}

export interface Subscription {
  MessageSubscription: Message | null;
}
