import React from 'react';
import Header, { HeaderLayout } from '../../components/Header';
import Intial from '../../components/Initial';

interface IProps {
  quizs: any[];
  step: number;
  next: () => void;
  title: string;
}

const QuizPresenter = (props: IProps) => {
  const { quizs, step, title, next } = props;
  const { quiz, syllables, length } = quizs[step - 1];
  return (
    <HeaderLayout Header={<Header title={title}/>}>
      <Intial
        next={next}
        quiz={quiz}
        syllables={syllables}
        length={length}
      />
    </HeaderLayout>
  )
}

export default QuizPresenter;