require('dotenv').config();
import axios from 'axios';

const {
  GOOGLE_SHEET_URL
} = process.env;

interface Initial {
  index: number;
  Timestamp: Date;
  quiz: string;
  answer: string;
  level: number;
}

class InitialManager {
  private basicQuiz: object;
  private initialData: object;

  constructor() {
    this._config();
  }

  async _config() {
    const result = await axios.get(`${GOOGLE_SHEET_URL}?sheetName=initial`);
    const data: Initial[] = result.data.data;
    this.basicQuiz = this.makeBasicQuiz(data);
    this.initialData = data;
    this.makeDictionary(data);
  }

  makeBasicQuiz(data: Initial[]) {
    const basicQuiz = data.filter(i => i.level > 0)
      .reduce((accum, i) => (accum[i.level] = (accum[i.level] ? accum[i.level] : []).concat(i), accum), {});
    return basicQuiz;
  }

  makeDictionary(data: Initial[]) {
    const dictionary = data.filter(i => i.answer !== undefined).map(i => i.answer);
    console.log(dictionary);
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