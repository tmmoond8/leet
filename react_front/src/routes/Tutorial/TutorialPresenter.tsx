import React from 'react';
import Button from '../../components/Button';
import Header, { HeaderLayout } from '../../components/Header';
import styled from '../../styles/typed-components';

interface IProps {
  tutorials: object;
  onMoveQuiz: (number) => void;
}

const TutorialList = styled.ul`
  flex: 1;
  overflow: auto;
  padding: 2rem 1rem;
  li + li {
    margin-top: .5rem;
  }
`;

const TutorialPresenter = (props: IProps) => {
  const { onMoveQuiz, tutorials } = props;
  return (
    <HeaderLayout Header={<Header title="기본 문제"/>}>
      <TutorialList>
        {Object.keys(tutorials).map((key) => (
          <li key={key}>
            <Button value={`level ${key}`} onClick={() => onMoveQuiz(key)} inline={true}/>
          </li>
        ))}
      </TutorialList>
    </HeaderLayout>
  )
}

export default TutorialPresenter;