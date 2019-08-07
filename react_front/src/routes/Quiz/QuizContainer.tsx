import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import QuizPresenter from './QuizPresenter';

interface IProps extends RouteComponentProps {}

const QuizContainer = (props: IProps) => {
  const { location: { state } } = props;
  const [ step, setStep ] = useState(1);
  const { quizs, title } = state;
  return (
    <QuizPresenter 
      next={() => setStep(step + 1)} 
      quizs={quizs} 
      step={step}
      title={title}
    />
  )
}

export default QuizContainer;