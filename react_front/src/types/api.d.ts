/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getFile
// ====================================================

export interface getFile_GetFile_children {
  __typename: "File";
  name: string;
}

export interface getFile_GetFile {
  __typename: "File";
  name: string;
  children: (getFile_GetFile_children | null)[] | null;
}

export interface getFile {
  GetFile: getFile_GetFile | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMessages
// ====================================================

export interface getMessages_GetMessages_messages_user {
  __typename: "User";
  nickname: string;
  id: number;
}

export interface getMessages_GetMessages_messages {
  __typename: "Message";
  id: number;
  text: string;
  user: getMessages_GetMessages_messages_user;
  createdAt: number;
}

export interface getMessages_GetMessages {
  __typename: "GetMessagesResponse";
  ok: boolean;
  error: string | null;
  messages: (getMessages_GetMessages_messages | null)[] | null;
}

export interface getMessages {
  GetMessages: getMessages_GetMessages;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: sendMessage
// ====================================================

export interface sendMessage_SendMessage_message_user {
  __typename: "User";
  nickname: string;
  id: number;
}

export interface sendMessage_SendMessage_message {
  __typename: "Message";
  id: number;
  text: string;
  user: sendMessage_SendMessage_message_user;
  createdAt: number;
}

export interface sendMessage_SendMessage {
  __typename: "SendMessageResponse";
  ok: boolean;
  error: string | null;
  message: sendMessage_SendMessage_message | null;
}

export interface sendMessage {
  SendMessage: sendMessage_SendMessage;
}

export interface sendMessageVariables {
  text: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: messageSubscription
// ====================================================

export interface messageSubscription_MessageSubscription_user {
  __typename: "User";
  nickname: string;
  id: number;
}

export interface messageSubscription_MessageSubscription {
  __typename: "Message";
  id: number;
  text: string;
  user: messageSubscription_MessageSubscription_user;
  createdAt: number;
}

export interface messageSubscription {
  MessageSubscription: messageSubscription_MessageSubscription | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: joinChat
// ====================================================

export interface joinChat_JoinChat {
  __typename: "JoinChatResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface joinChat {
  JoinChat: joinChat_JoinChat;
}

export interface joinChatVariables {
  nickname: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_GetUser_user {
  __typename: "User";
  id: number;
  nickname: string;
}

export interface getUser_GetUser {
  __typename: "GetUserResponse";
  ok: boolean;
  error: string | null;
  user: getUser_GetUser_user | null;
}

export interface getUser {
  GetUser: getUser_GetUser;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getInitial
// ====================================================

export interface getInitial_GetInitial_data {
  __typename: "Initial";
  quiz: string;
  syllables: (string | null)[];
  id: number;
  level: number;
}

export interface getInitial_GetInitial {
  __typename: "GetInitialResponse";
  ok: boolean;
  error: string | null;
  data: (getInitial_GetInitial_data | null)[] | null;
}

export interface getInitial {
  GetInitial: getInitial_GetInitial;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
