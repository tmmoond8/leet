import axios from 'axios';
import dotenv from 'dotenv';
import { arrayShuffle } from '../lib'
dotenv.config();

const {
  GOOGLE_SHEET_URL
} = process.env;

interface Initial {
  id: number;
  Timestamp: Date;
  quiz: string;
  answer: string;
  syllables: string[];
  length: number;
}

class InitialManager {
  private initialData: Initial[];

  constructor() {
    this._config();
  }

  async _config() {
    const result = await axios.get(`${GOOGLE_SHEET_URL}?sheetName=initial`);
    const data: Initial[] = result.data.data;
    this.initialData = this.makeBasicQuiz(data);
  }

  makeBasicQuiz(data: Initial[]): Initial[] {
    const basicQuiz = data.filter(i => i.id > 0)
      .map((i: Initial) => ({
        ...i,
        syllables: this.createSyllables(i),
        length: i.answer.length
      }));
    return basicQuiz;
  }

  createSyllables(initial: Initial) {
    const { answer } = initial;
    const size = 12;
    const left = ['어', '워', '분', '코', '노', '가', '마', '자', '아', '그', '문', '준', '생', '예', '시', '소', '별', '비', '재'];
    const syllables = new Set(answer.split(''));
    return arrayShuffle([...Array.from(syllables), ...left].slice(0, size));
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