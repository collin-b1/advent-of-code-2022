import { getInput } from '../../util/util';
import { Day03 } from './day-03';

describe('Day 3', () => {

  const testData = [
    'vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg',
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw',
  ];

  test('getSimilar', () => {
    expect(new Day03().getSimilar(['aDgcPr', 'LkcqQT'])).toBe('c');
    expect(new Day03().getSimilar(['PTcSe', 'mNVzA', 'pFcAe'])).toBe('');
  });

  test('getPriority', () => {
    expect(new Day03().getPriority('a')).toBe(1);
    expect(new Day03().getPriority('z')).toBe(26);
    expect(new Day03().getPriority('A')).toBe(27);
    expect(new Day03().getPriority('Z')).toBe(52);
    expect(new Day03().getPriority('')).toBe(-1);
  });

  test('part1', () => {
    expect(new Day03().part1(testData)).toBe(157);
    expect(new Day03().part1(getInput(3))).toBe(7553);
  });
  
  test('part2', () => {
    expect(new Day03().part2(testData)).toBe(70);
    expect(new Day03().part2(getInput(3))).toBe(2758);
  });
});