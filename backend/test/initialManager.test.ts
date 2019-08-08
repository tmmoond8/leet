import {
  createSyllables,
  randomSyllables,
  Initial
} from '../src/dataManager/InitialManager';

test('randomSyllables', () => {
  for (let i = 0; i < 1000; i++) {
    expect(randomSyllables()).toHaveLength(12);
  }
});

test('createSyllables', () => {
  const jest = expect(createSyllables({ answer: '정의' } as Initial))
  jest.toHaveLength(12);
  jest.toContain('정');
  jest.toContain('의');
});
