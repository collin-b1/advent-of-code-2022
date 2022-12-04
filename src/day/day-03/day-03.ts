import Day from '../day';

export class Day03 extends Day {
  part1 = (data: string[]): number => {
    let sum = 0;
    data.forEach((line) => {
      const one = line.substring(0, line.length / 2);
      const two = line.substring(line.length / 2, line.length);
      const similar = this.getSimilar([one, two]);
      sum += this.getPriority(similar);
    });
    return sum;
  };
  
  part2 = (data: string[]): number => {
    let sum = 0;
    let group: string[] = [];
    for (let i = 0; i < data.length; i++) {
      group.push(data[i]);
      if ((i + 1) % 3 === 0) {
        sum += this.getPriority(this.getSimilar(group));
        group.length = 0;
      }
    }
    return sum;
  };

  getSimilar = (data: string[]): string => {
    if (data.length < 2) return '';
    let similar = data[0];
    for (let i = 0; i < data[0].length; i++) {
      for (let j = 1; j < data.length; j++) {
        if (data[j].indexOf(data[0].charAt(i)) === -1) {
          similar = similar.replace(data[0].charAt(i), '');
        }
      }
    }
    return similar.charAt(0);
  };

  getPriority = (item: string): number => {
    if (/^[a-z]$/g.test(item)) {
      return item.charCodeAt(0) - 96;
    } else if (/^[A-Z]$/g.test(item)) {
      return item.charCodeAt(0) - 38;
    } else {
      return -1;
    }
  };
}