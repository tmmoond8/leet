import gql from 'graphql-tag';

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


export const SUBSCRIBE_TO_MESSAGES = gql`
  subscription messageSubscription {
    MessageSubscription {
      id
      text
      nickname
      createdAt
    }
  }
`;