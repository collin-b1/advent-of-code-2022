import Day from '../day';

export class Day06 extends Day {
  part1 = (data: string[]): number => this.findDistinctIndex(data[0], 4);
  
  part2 = (data: string[]): number => this.findDistinctIndex(data[0], 14);

  findDistinctIndex = (data: string, chars: number): number => {
    let str = data;
    for (let i = chars; i < str.length; i++) {
      let sub = str.substring(i - chars, i);
      let t = [...new Set(sub)].join('');
      if (t === sub) return i;
    }
    return -1;
  }
}