import React from 'react';
import quizBg from '../../static/images/initial_bg.jpg';
import styled, { withProps } from '../../styles/typed-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
    width: 13rem;
    transform: translate(-50%, -50%);
    background-color: white;
    font-size: 1.5rem;
    border-radius: 1rem;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 0 10px 10px white;
  }
`;

const Answer = withProps<any>(styled.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  padding: 1rem;

  & > ul {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    color: white;
    font-size: ${props => props.small ? '1rem' : '2rem' };
    text-align: center;
    li {
      display: inline;
      height: ${props => props.small ? '2rem' : '4rem' };
      width: ${props => props.small ? '2rem' : '4rem' };
      line-height: ${props => props.small ? '2rem' : '4rem' };
      background-color: ${props => props.theme.color.violet};
      border-radius: 50%;
    }
  }
`;

const Syllables = styled.div`
  flex: 3;
  background-color: ${props => props.theme.color.lightGrey};
  padding: 1rem;
  border-radius: 0 0 30px 30px;

  & > ul {
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    li {
      display: inline;
      height: 2.5rem;
      width: 2.5rem;
      line-height: 2.5rem;
      background-color: ${props => props.theme.color.violet};
      border-radius: 50%;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      &:active {
        background-color: ${props => props.theme.color.deepViolet};
        outline:none;
      }
    }

    & + ul {
      margin-top: 1rem;
    }
  }
  ${props => props.theme.media.phone`
    border-radius: unset;
  `}
`;

interface IProps {
  quiz: string;
  answer: string;
  syllables: string[];
  length: number;
  onTouch: (string) => void;
  onClear: () => void;
}

const InitialPresenter = (props: IProps) => {
  const { quiz, answer, syllables, onClear, onTouch, length } = props;
  const syllablesTop = syllables.slice(0, syllables.length/2);
  const syllablesBottom = syllables.slice(syllables.length/2);
  return (
    <Wrapper>
      <Quiz>
        <p>{quiz}</p>
      </Quiz>
      <Answer onClick={onClear} small={length > 4}>
        <ul>
          {'_'.repeat(length).split('').map((_, index) => (
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
            <li key={index} onClick={() => onTouch(syllable)}>{syllable}</li>
          ))}
        </ul>
      </Syllables>
    </Wrapper>
  )
}

export default InitialPresenter;