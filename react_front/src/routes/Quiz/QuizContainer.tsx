import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import QuizPresenter from './QuizPresenter';

interface IProps extends RouteComponentProps {}

const QuizContainer = (props: IProps) => {
  const { history, location: { state } } = props;
  const [ step, setStep ] = useState(1);
  const { quizs, title } = state;
  const next = () => {
    if(quizs.length === step + 1) {
      history.push('/tutorial');
      return;
    }
    setStep(step + 1);
  }

  return (
    <QuizPresenter 
      next={next} 
      quizs={quizs} 
      step={step}
      title={title}
    />
  )
}

export default QuizContainer;