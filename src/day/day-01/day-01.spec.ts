import { getInput } from '../../util/util'
import { Day01 } from './day-01'


describe('Day 1', () => {

  const testData = [
    '1000',
    '2000',
    '3000',
    '',
    '4000',
    '',
    '5000',
    '6000',
    '',
    '7000',
    '8000',
    '9000',
    '',
    '10000',
  ]

  test('part1', () => {
    expect(new Day01().part1(testData)).toBe(24000)
    expect(new Day01().part1(getInput(1))).toBe(72602)
  })
  
  test('part2', () => {
    expect(new Day01().part2(testData)).toBe(45000)
    expect(new Day01().part2(getInput(1))).toBe(207410)
  })
})