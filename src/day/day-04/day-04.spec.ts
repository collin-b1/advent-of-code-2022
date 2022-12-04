import { getInput } from '../../util/util';
import { Day04 } from './day-04';

describe('Day 4', () => {

  const testData = [
    '2-4,6-8',
    '2-3,4-5',
    '5-7,7-9',
    '2-8,3-7',
    '6-6,4-6',
    '2-6,4-8',
  ];

  test('getRanges', () => {
    expect(new Day04().getRanges('2-4,6-8')).toStrictEqual([[2, 4], [6, 8]]);
    expect(new Day04().getRanges('4-4,3-2')).toStrictEqual([[4, 4], [3, 2]]);
    expect(new Day04().getRanges('8-9,1-9')).toStrictEqual([[8, 9], [1, 9]]);
  });

  test('part1', () => {
    expect(new Day04().part1(testData)).toBe(2);
    expect(new Day04().part1(getInput(4))).toBe(584);
  });
  
  test('part2', () => {
    expect(new Day04().part2(testData)).toBe(4);
    expect(new Day04().part2(getInput(4))).toBe(933);
  });
});