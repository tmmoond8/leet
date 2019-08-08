import React from 'react';
import Header, { HeaderLayout } from '../../components/Header';
import Intial from '../../components/Initial';
import styled from '../../styles/typed-components';

interface IProps {
  quizs: any[];
  step: number;
  next: () => void;
  title: string;
}

const HeaderRight = styled.span`
  color: white;
`;

const QuizPresenter = (props: IProps) => {
  const { quizs, step, title, next } = props;
  const { quiz, syllables, length, id } = quizs[step - 1];
  const QuizHeader = <Header title={title} Right={<HeaderRight>{`${step} / ${quizs.length}`}</HeaderRight>}/>;
  return (
    <HeaderLayout Header={QuizHeader}>
      <Intial
        quizId={id}
        next={next}
        quiz={quiz}
        syllables={syllables}
        length={length}
      />
    </HeaderLayout>
  )
}

export default QuizPresenter;