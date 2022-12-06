import { getInput } from '../../util/util';
import { Day05 } from './day-05';

describe('Day 5', () => {

  const testData = [
    '    [D]    ',
    '[N] [C]    ',
    '[Z] [M] [P]',
    '1   2   3 ',
    '',
    'move 1 from 2 to 1',
    'move 3 from 1 to 3',
    'move 2 from 2 to 1',
    'move 1 from 1 to 2',
  ];

  test('part1', () => {
    expect(new Day05().part1(testData)).toBe('CMZ');
    expect(new Day05().part1(getInput(5))).toBe('WCZTHTMPS');
  });
  
  test('part2', () => {
    expect(new Day05().part2(testData)).toBe('MCD');
    expect(new Day05().part2(getInput(5))).toBe('BLSGJSDTS');
  });
});