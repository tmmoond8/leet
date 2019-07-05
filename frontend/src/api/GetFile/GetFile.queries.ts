import { gql } from 'apollo-boost';

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