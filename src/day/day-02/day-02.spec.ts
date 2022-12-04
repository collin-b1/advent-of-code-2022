import { getInput } from '../../util/util';
import { Day02 } from './day-02';

describe('Day 2', () => {

  const testData = [
    'A Y',
    'B X',
    'C Z',
  ];

  test('part1', () => {
    expect(new Day02().part1(testData)).toBe(15);
    expect(new Day02().part1(getInput(2))).toBe(13446);
  });
  
  test('part2', () => {
    expect(new Day02().part2(testData)).toBe(12);
    expect(new Day02().part2(getInput(2))).toBe(13509);
  });
});