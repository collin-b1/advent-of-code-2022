import fs from 'fs';
import path from 'path';

export const getInput = (day: number) => {
  return fs.readFileSync(path.resolve(__dirname, `../day/day-${String(day).padStart(2, '0')}/input.txt`), 'utf-8').split('\n').filter((x) => x).map((x) => x.trimEnd());
};

export function getEnumKeyByEnumValue<T extends { [index:string]:string }>(myEnum:T, enumValue:string):keyof T | null {
  let keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue);
  return keys.length > 0 ? keys[0] : null;
}

export const logMatrix = (matrix: any[][]): void => {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
}