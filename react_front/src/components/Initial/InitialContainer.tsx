import React, { useState } from 'react';
import InitialPresenter from './InitialPresenter';

interface IProps {
  next: () => void;
  quiz: string;
  syllables: string[];
  length: number;
}

const InitialContainer = (props: IProps) => {
  const { quiz, syllables, length } = props;
  const [ answer, setAnswer ] = useState('');

  const handleTouch = (syllable) => {
    if(answer.length < length) {
      setAnswer(answer + syllable);
    }
  }

  return (
    <InitialPresenter 
      quiz={quiz}
      answer={answer}
      syllables={syllables}
      length={length}
      onTouch={(syllable) => handleTouch(syllable)}
      onClear={() => setAnswer("")}
    />
  )
}

export default InitialContainer;