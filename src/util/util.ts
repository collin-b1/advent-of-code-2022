import fs from 'fs'

export const getInput = (day: number) => {
  return fs.readFileSync(`src/day/day-${String(day).padStart(2, '0')}/input.txt`, 'utf-8').toString().trim().split('\n')
}