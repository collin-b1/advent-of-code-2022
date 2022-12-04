import fs from 'fs';

export const getInput = (day: number) => {
  return fs.readFileSync(`src/day/day-${String(day).padStart(2, '0')}/input.txt`, 'utf-8').toString().trim().split('\n');
};

export function getEnumKeyByEnumValue<T extends { [index:string]:string }>(myEnum:T, enumValue:string):keyof T | null {
  let keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue);
  return keys.length > 0 ? keys[0] : null;
}