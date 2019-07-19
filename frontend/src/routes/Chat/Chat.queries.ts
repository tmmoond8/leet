import { gql } from 'apollo-boost';

export const GET_MESSAGES = gql`
  query getMessages {
    GetMessages {
      ok
    error
    messages {
      text
      nickname
      id
      createdAt
    }
  }
}
`;

export const MESSAGE_SUBSCRIPTION = gql`
  subscription messageUpdate {
    MessageSubscription {
      id
      text
      nickname
      createdAt
    }
  }  
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($nickName: String!, $text: String!) {
    SendMessage(nickname: $nickName, text: $text) {
    ok
    error
    message {
      id
      nickname
      text
      createdAt
    }
  }
}
`;
