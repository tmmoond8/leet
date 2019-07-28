import gql from 'graphql-tag';

export const GET_MESSAGES = gql`
  query getMessages {
    GetMessages {
      ok
      error
      messages {
        text
        user {
          nickname
          id
        }
        id
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
      user {
        nickname
        id
      }
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
      user {
        nickname
        id
      }
      text
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