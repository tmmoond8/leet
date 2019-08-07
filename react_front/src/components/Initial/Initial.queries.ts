import gql from 'graphql-tag';

export const SUBMIT_ANSWER_INITIAL = gql`
  mutation submitAnswerInitial($id: Int!, $answer: String!) {
    SubmitAnswerInitial(id: $id, answer: $answer) {
      ok
      error
      result
    }
  }
`;