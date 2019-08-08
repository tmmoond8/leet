import axios from 'axios';
import dotenv from 'dotenv';
import { arrayShuffle } from '../lib'
dotenv.config();

const {
  GOOGLE_SHEET_URL
} = process.env;

export interface Initial {
  id: number;
  Timestamp: Date;
  quiz: string;
  answer: string;
  syllables: string[];
  length: number;
}

export const randomSyllables = (function () {
  let index = 0;
  const SIZE = 18;
  const syllables = '대백신비리지정박저멍푸보커오따유빔바근버이이주육음거서대면핵잼십거일리대레리기밥이서스따왕이명문병냉대치멍꿀박세인어석귄개울틴물그져귀페반불여워가끼타세수종폭머태가빼기개이댓득평울박져비시부글풍펭이극빔오재표홍알대만잠알명비레어새';
  return () => {
    index = index + SIZE < syllables.length ? index + SIZE : SIZE;
    return Array.from(new Set(syllables.slice(index - SIZE, index).split(''))).slice(0, 12)
  };
})();

export const createSyllables = (initial: Initial) => {
  const { answer } = initial;
  const size = 12;
  const syllables = new Set(answer.split(''));
  return arrayShuffle([...Array.from(syllables), ...randomSyllables()].slice(0, size));
}

export const makeBasicQuiz = (data: Initial[]): Initial[] => {
  const basicQuiz = data.filter(i => i.id > 0)
    .map((i: Initial) => ({
      ...i,
      syllables: createSyllables(i),
      length: i.answer.length
    }));
  return basicQuiz;
}

class InitialManager {
  private initialData: Initial[];

  constructor() {
    this._config();
  }

  async _config() {
    const result = await axios.get(`${GOOGLE_SHEET_URL}?sheetName=initial`);
    const data: Initial[] = result.data.data;
    this.initialData = makeBasicQuiz(data);
  }

  getInitial() {
    if (!this.initialData) {
      throw Error('not initialized');
    }
    return this.initialData;
  }

  checkAnswer(id: number, answer: string) {
    if (!this.initialData) {
      throw Error('not initialized');
    }
    const inital = this.initialData.find(i => i.id === id);
    if (!inital) {
      throw Error(`not exist that id: ${id}`);
    }
    return inital.answer === answer;
  }
}

export default new InitialManager();