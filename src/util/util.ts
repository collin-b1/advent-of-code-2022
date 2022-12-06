import fs from 'fs';
import path from 'path';

export const getInput = (day: number) => {
  return fs.readFileSync(path.resolve(__dirname, `../day/day-${String(day).padStart(2, '0')}/input.txt`), 'utf-8').split('\n').filter((x) => x).map((x) => x.trimEnd());
};