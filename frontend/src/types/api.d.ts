/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getFile
// ====================================================

export interface getFile_GetFile_children_children_children {
  __typename: "File";
  name: string;
  content: string;
}

export interface getFile_GetFile_children_children {
  __typename: "File";
  name: string;
  content: string;
  children: (getFile_GetFile_children_children_children | null)[] | null;
}

export interface getFile_GetFile_children {
  __typename: "File";
  name: string;
  content: string;
  children: (getFile_GetFile_children_children | null)[] | null;
}

export interface getFile_GetFile {
  __typename: "File";
  name: string;
  content: string;
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

export interface getMessages_GetMessages_messages {
  __typename: "Message";
  text: string;
  nickname: string;
  id: number;
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
// GraphQL subscription operation: messageUpdate
// ====================================================

export interface messageUpdate_MessageSubscription {
  __typename: "Message";
  id: number;
  text: string;
  nickname: string;
  createdAt: number;
}

export interface messageUpdate {
  MessageSubscription: messageUpdate_MessageSubscription | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: sendMessage
// ====================================================

export interface sendMessage_SendMessage_message {
  __typename: "Message";
  id: number;
  nickname: string;
  text: string;
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
  nickName: string;
  text: string;
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
