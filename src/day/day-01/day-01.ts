import Day from '../day';

export class Day01 extends Day {
  part1 = (data: string[]): number => this.getCalorieArray(data).sort((a, b) => b - a)[0];
  
  part2 = (data: string[]): number => this.getCalorieArray(data).sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a + b);

  public getCalorieArray = (data: string[]): number[] => {
    const sums: number[] = [];
    let current = 0;
    for (let x = 0; x < data.length; x++) {
      current += parseInt(data[x]) || 0;
      if (data[x] === '' || x === data.length - 1) {
        sums.push(current);
        current = 0;
      }
    }
    return sums;
  };
}