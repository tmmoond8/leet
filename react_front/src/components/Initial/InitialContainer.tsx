import React, { useState } from 'react';
import { Mutation, MutationFn } from 'react-apollo';
import InitialPresenter from './InitialPresenter';
import { SUBMIT_ANSWER_INITIAL } from './Initial.queries';
import {
  submitAnswerInitial, submitAnswerInitialVariables
} from '../../types/api';


interface IProps {
  next: () => void;
  quizId: number;
  quiz: string;
  syllables: string[];
  length: number;
}

class SubmitAnswerMutation extends Mutation<submitAnswerInitial, submitAnswerInitialVariables> {}

const InitialContainer = (props: IProps) => {
  const { quizId, quiz, syllables, length, next } = props;
  const [ answer, setAnswer ] = useState('');

  const handleTouch = async (syllable: string, submitMutation: MutationFn<submitAnswerInitial, submitAnswerInitialVariables>) => {
    if(answer.length < length) {
      setAnswer(answer + syllable);
      if ((answer + syllable).length === length) {
        const { data= { SubmitAnswerInitial: {} }} = await submitMutation({
          variables: {
            answer: answer + syllable,
            id: quizId,
          }
        }) || {};
        const { SubmitAnswerInitial } = data;
        if(SubmitAnswerInitial["result"]) {
          next();
          setAnswer('');
        }
      }
    } else {
      // too many
    }
  }

  return (
    <SubmitAnswerMutation mutation={SUBMIT_ANSWER_INITIAL}>
      {(submitAnswerMutation) => (
        <InitialPresenter 
          quiz={quiz}
          answer={answer}
          syllables={syllables}
          length={length}
          onTouch={(syllable) => handleTouch(syllable, submitAnswerMutation)}
          onClear={() => setAnswer("")}
        />
      )}
    </SubmitAnswerMutation>
  )
}

export default InitialContainer;