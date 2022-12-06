import { getInput } from '../../util/util';
import { Day06 } from './day-06';

describe('Day 6', () => {
  test('part1', () => {
    expect(new Day06().part1(['mjqjpqmgbljsphdztnvjfqwrcgsmlb'])).toBe(7);
    expect(new Day06().part1(['bvwbjplbgvbhsrlpgdmjqwftvncz'])).toBe(5);
    expect(new Day06().part1(['nppdvjthqldpwncqszvftbrmjlhg'])).toBe(6);
    expect(new Day06().part1(['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'])).toBe(10);
    expect(new Day06().part1(['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'])).toBe(11);
    expect(new Day06().part1(getInput(6))).toBe(1766);
  });
  
  test('part2', () => {
    expect(new Day06().part2(['mjqjpqmgbljsphdztnvjfqwrcgsmlb'])).toBe(19);
    expect(new Day06().part2(['bvwbjplbgvbhsrlpgdmjqwftvncz'])).toBe(23);
    expect(new Day06().part2(['nppdvjthqldpwncqszvftbrmjlhg'])).toBe(23);
    expect(new Day06().part2(['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'])).toBe(29);
    expect(new Day06().part2(['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'])).toBe(26);
    expect(new Day06().part2(getInput(6))).toBe(2383);
  });
});