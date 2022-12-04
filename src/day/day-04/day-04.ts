import Day from '../day';

export class Day04 extends Day {
  part1 = (data: string[]): number => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      const ranges = this.getRanges(data[i]);
      if (ranges[0][0] <= ranges[1][0] && ranges[0][1] >= ranges[1][1]) {
        total++;
      } else if (ranges[1][0] <= ranges[0][0] && ranges[1][1] >= ranges[0][1]) {
        total++;
      }
    }
    return total;
  };
  
  part2 = (data: string[]): number => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      const ranges = this.getRanges(data[i]);
      if (ranges[0][0] <= ranges[1][1] && ranges[0][1] >= ranges[1][0]) {
        total++;
      }
    }
    return total;
  };

  getRanges = (data: string) => {
    return data.split(',').map(x => x.split('-').map(y => parseInt(y)));
  };
}