require('dotenv').config();
import axios from 'axios';
import * as hangul from 'hangul-js';

const {
  GOOGLE_SHEET_URL
} = process.env;

interface Initial {
  id: number;
  Timestamp: Date;
  quiz: string;
  answer: string;
  level: number;
  syllables: string[];
  length: number;
}

class InitialManager {
  private initialData: Initial[];
  private dictionary: object;

  constructor() {
    this._config();
  }

  async _config() {
    const result = await axios.get(`${GOOGLE_SHEET_URL}?sheetName=initial`);
    const data: Initial[] = result.data.data;
    this.makeDictionary(data);
    this.initialData = this.makeBasicQuiz(data);
  }

  makeBasicQuiz(data: Initial[]): Initial[] {
    const basicQuiz = data.filter(i => i.level > 0)
      .map((i: Initial) => ({
        ...i,
        syllables: this.createSyllables(i),
        length: i.answer.length
      }));
    return basicQuiz;
  }

  createSyllables(initial: Initial) {
    const { answer, level, quiz } = initial;
    const size = 12;
    const left = ['어', '워', '분', '코', '노', '가', '마', '자', '아', '그', '문', '준', '생', '예', '시', '소', '별', '비'];
    const syllables = new Set(answer.split(''));
    for (let i = 0; i < level; i++) {
      const random = Math.floor(Math.random() * 100);
      quiz.split('').forEach(i => {
        const item = this.dictionary[i][random % this.dictionary[i].length];
        syllables.add(item)
      });
    }
    return [...Array.from(syllables), ...left].slice(0, size);
  }

  makeDictionary(data: Initial[]) {
    const syllables = data.filter(i => i.answer !== undefined)
      .reduce((accum, i) => accum.concat(i.answer.split('') as any), []);
    const dictionary = syllables.reduce((accum, s) => {
      const firstAlphabet: string = hangul.disassemble(s).shift() || '';
      accum[firstAlphabet] = accum[firstAlphabet] ? accum[firstAlphabet].add(s) : new Set(s);
      return accum;
    }, {});
    this.dictionary = Object.entries(dictionary).reduce((accum, [key, set]) => (accum[key] = Array.from(set as any), accum), {})
  }

  // 단계 값을 받아서 퀴즈를 리턴
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