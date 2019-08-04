require('dotenv').config();
import axios from 'axios';
import * as hangul from 'hangul-js';


const {
  GOOGLE_SHEET_URL
} = process.env;

interface Initial {
  index: number;
  Timestamp: Date;
  quiz: string;
  answer: string;
  level: number;
  syllables: string[];
}

class InitialManager {
  private basicQuiz: object;
  private dictionary: object;
  private initialData: object;

  constructor() {
    this._config();
  }

  async _config() {
    const result = await axios.get(`${GOOGLE_SHEET_URL}?sheetName=initial`);
    const data: Initial[] = result.data.data;
    this.initialData = data;
    this.makeDictionary(data);
    this.basicQuiz = this.makeBasicQuiz(data);
  }

  makeBasicQuiz(data: Initial[]) {
    const basicQuiz = data.filter(i => i.level > 0)
      .reduce((accum, i) => {
        accum[i.level] = (accum[i.level] || []).concat({
          ...i,
          syllables: this.createSyllables(i)
        });
        return accum;
      }, {});
    return basicQuiz;
  }

  createSyllables(initial: Initial) {
    const { answer, level, quiz } = initial;
    const size = 10;
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
  getBasicQuiz(level: number) {
    if (!this.initialData) {
      throw Error('not initialized');
    }
    const basic = this.basicQuiz[level];
    if (!basic) {
      throw Error(`can't find`);
    }
    return basic;
  }
}

export default new InitialManager();