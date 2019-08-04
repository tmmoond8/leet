export const typeDefs = ["type File {\n  name: String!\n  children: [File]\n  content: String!\n}\n\ntype Query {\n  GetFile: File\n  GetMessages: GetMessagesResponse!\n  GetUser: GetUserResponse!\n  GetBasicInitial(level: Int!): GetQuizInitialResponse!\n}\n\ntype GetMessagesResponse {\n  ok: Boolean!\n  error: String\n  messages: [Message]\n}\n\ntype GetUserResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype JoinChatResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  JoinChat(nickname: String!): JoinChatResponse!\n  SendMessage(text: String!): SendMessageResponse!\n}\n\ntype Subscription {\n  MessageSubscription: Message\n}\n\ntype SendMessageResponse {\n  ok: Boolean!\n  error: String\n  message: Message\n}\n\ntype Message {\n  id: Int!\n  user: User!\n  text: String!\n  createdAt: Float!\n}\n\ntype User {\n  id: Int!\n  nickname: String!\n}\n\ntype QuizInitial {\n  quiz: String!\n  syllables: [String]!\n}\n\ntype GetQuizInitialResponse {\n  ok: Boolean!\n  error: String\n  data: [QuizInitial]\n}\n"];
/* tslint:disable */

export interface Query {
  GetFile: File | null;
  GetMessages: GetMessagesResponse;
  GetUser: GetUserResponse;
  GetBasicInitial: GetQuizInitialResponse;
}

export interface GetBasicInitialQueryArgs {
  level: number;
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

export interface GetUserResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface GetQuizInitialResponse {
  ok: boolean;
  error: string | null;
  data: Array<QuizInitial> | null;
}

export interface QuizInitial {
  quiz: string;
  syllables: Array<string>;
}

export interface Mutation {
  JoinChat: JoinChatResponse;
  SendMessage: SendMessageResponse;
}

export interface JoinChatMutationArgs {
  nickname: string;
}

export interface SendMessageMutationArgs {
  text: string;
}

export interface JoinChatResponse {
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
