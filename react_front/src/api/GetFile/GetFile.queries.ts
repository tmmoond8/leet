import gql from 'graphql-tag';

export const GET_FILE = gql`
  query getFile {
    GetFile {
      name
      children {
        name
      }
    }
  }
`;