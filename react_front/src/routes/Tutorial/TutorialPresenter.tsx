import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import styled from '../../styles/typed-components';

interface IProps {
  tutorials: object;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TutorialList = styled.ul`
  flex: 1;
  padding: 2rem 1rem;
  li + li {
    margin-top: .5rem;
  }
`;

const TutorialPresenter = (props: IProps) => {
  const { tutorials } = props;
  return (
    <Wrapper>
      <Header title="기본 문제"/>
      <TutorialList>
        {Object.keys(tutorials).map((key) => (
          <li key={key}>
            <Button value={`level ${key}`} href="/" inline={true}/>
          </li>
        ))}
      </TutorialList>
    </Wrapper>
  )
}

export default TutorialPresenter;