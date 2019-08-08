export const typeDefs = ["type File {\n  name: String!\n  children: [File]\n  content: String!\n}\n\ntype Query {\n  GetFile: File\n  GetMessages: GetMessagesResponse!\n  GetUser: GetUserResponse!\n  GetInitial: GetInitialResponse!\n}\n\ntype GetMessagesResponse {\n  ok: Boolean!\n  error: String\n  messages: [Message]\n}\n\ntype GetUserResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype JoinChatResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  JoinChat(nickname: String!): JoinChatResponse!\n  SendMessage(text: String!): SendMessageResponse!\n  SubmitAnswerInitial(id: Int!, answer: String!): SubmitAnswerInitialResponse!\n}\n\ntype Subscription {\n  MessageSubscription: Message\n}\n\ntype SendMessageResponse {\n  ok: Boolean!\n  error: String\n  message: Message\n}\n\ntype Message {\n  id: Int!\n  user: User!\n  text: String!\n  createdAt: Float!\n}\n\ntype User {\n  id: Int!\n  nickname: String!\n}\n\ntype Initial {\n  quiz: String!\n  syllables: [String]!\n  id: Int!\n  length: Int!\n}\n\ntype GetInitialResponse {\n  ok: Boolean!\n  error: String\n  data: [Initial]\n}\n\ntype SubmitAnswerInitialResponse {\n  ok: Boolean!\n  error: String\n  result: Boolean\n}\n"];
/* tslint:disable */

export interface Query {
  GetFile: File | null;
  GetMessages: GetMessagesResponse;
  GetUser: GetUserResponse;
  GetInitial: GetInitialResponse;
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

export interface GetInitialResponse {
  ok: boolean;
  error: string | null;
  data: Array<Initial> | null;
}

export interface Initial {
  quiz: string;
  syllables: Array<string>;
  id: number;
  length: number;
}

export interface Mutation {
  JoinChat: JoinChatResponse;
  SendMessage: SendMessageResponse;
  SubmitAnswerInitial: SubmitAnswerInitialResponse;
}

export interface JoinChatMutationArgs {
  nickname: string;
}

export interface SendMessageMutationArgs {
  text: string;
}

export interface SubmitAnswerInitialMutationArgs {
  id: number;
  answer: string;
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

export interface SubmitAnswerInitialResponse {
  ok: boolean;
  error: string | null;
  result: boolean | null;
}

export interface Subscription {
  MessageSubscription: Message | null;
}
