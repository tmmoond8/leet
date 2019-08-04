import gql from 'graphql-tag';

export const GET_MESSAGES = gql`
  query getMessages {
    GetMessages {
      ok
      error
      messages {
        id
        text
        user {
          nickname
          id
        }
        createdAt
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($text: String!) {
    SendMessage(text: $text) {
    ok
    error
    message {
      id
      text
      user {
        nickname
        id
      }
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
      user {
        nickname
        id
      }
      createdAt
    }
  }
`;

export const JOIN_CHAT = gql`
  mutation joinChat($nickname: String!) {
    JoinChat(nickname: $nickname) {
      ok
      error
      token
    }
  }
`;

export const GET_USER = gql`
  query getUser {
    GetUser {
      ok
      error
      user {
        id
        nickname
      }
    }
  }
`;