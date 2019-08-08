import gql from 'graphql-tag';

export const GET_INITIAL = gql`
  query getInitial {
    GetInitial {
      ok
      error
      data {
        quiz
        syllables
        id
        length
      }
    }
  }
`;