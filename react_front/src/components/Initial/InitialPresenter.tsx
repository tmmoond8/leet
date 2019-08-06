import React from 'react';
import quizBg from '../../static/images/initial_bg.jpg';
import styled from '../../styles/typed-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Quiz = styled.div`
  flex: 2.5;
  position: relative;
  background-image: url(${quizBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.6;

  & > p {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 60vw;
    transform: translate(-50%, -50%);
    background-color: white;
    font-size: 2rem;
    border-radius: 1rem;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 0 10px 10px white;
  }
`;

const Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;

  & > ul {
    display: flex;
    color: white;
    font-size: 2rem;
    text-align: center;
    li {
      display: inline;
      height: 4rem;
      width: 4rem;
      line-height: 4rem;
      background-color: ${props => props.theme.color.violet};
      border-radius: 50%;
    }
    li + li {
      margin-left: 1rem;
    }
  }
`;

const Syllables = styled.div`
  flex: 3;
  background-color: ${props => props.theme.color.lightGrey};
  padding: 2rem;

  & > ul {
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 2rem;
    text-align: center;
    li {
      display: inline;
      height: 4rem;
      width: 4rem;
      line-height: 3.5rem;
      background-color: ${props => props.theme.color.violet};
      border-radius: 50%;
    }

    & + ul {
      margin-top: 1rem;
    }
  }
`;

interface IProps {
  quiz: string;
  answer: string;
  syllables: string[];
  onTouch: (string) => void;
  onClear: () => void;
}

const InitialPresenter = (props: IProps) => {
  const { quiz, answer, syllables, onClear, onTouch } = props;
  const syllablesTop = syllables.slice(0, syllables.length/2);
  const syllablesBottom = syllables.slice(syllables.length/2);
  return (
    <Wrapper>
      <Quiz>
        <p>{quiz}</p>
      </Quiz>
      <Answer onClick={onClear}>
        <ul>
          {quiz.split('').map((_, index) => (
            <li key={index}>{answer[index] || ''}</li>
          ))}
        </ul>
      </Answer>
      <Syllables>
        <ul>
          {syllablesTop.map((syllable, index) => (
            <li key={index} onClick={() => onTouch(syllable)}>{syllable}</li>
          ))}
        </ul>
        <ul>
          {syllablesBottom.map((syllable, index) => (
            <li key={index}>{syllable}</li>
          ))}
        </ul>
      </Syllables>
    </Wrapper>
  )
}

export default InitialPresenter;