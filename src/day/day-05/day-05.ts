import { logMatrix } from '../../util/util';
import Day from '../day';

export class Day05 extends Day {
  public readonly splitRegEx = /.{1,4}/g;
  public readonly bracketRegEx = /[\[\]]/g;
  public readonly instructionRegEx = /(?=.*move)(?=.*from)(?=.*to).*/g;
  public readonly numberRegEx = /\d+/g;

  private crates: string[];
  private instructions: number[][];

  constructor() {
    super();
    this.crates = [];
    this.instructions = [];
  }

  part1 = (data: string[]): string => {
    this.fillData(data);
    this.instructions.forEach((instruction) => {
      this.moveCrates(instruction[0], instruction[1] - 1, instruction[2] - 1, 1);
    });
    return this.getTopLevelCrates(this.crates);
  };
  
  part2 = (data: string[]): string => {
    this.fillData(data);
    this.instructions.forEach((instruction) => {
      this.moveCrates(instruction[0], instruction[1] - 1, instruction[2] - 1, instruction[0]);
    });
    return this.getTopLevelCrates(this.crates);
  };

  fillData = (data: string[]) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].match(this.bracketRegEx) !== null) {
        data[i].match(this.splitRegEx)?.forEach((x, y) => {
          const crate = x.trim().replace(this.bracketRegEx, '');
          if (!this.crates[y]) {
            this.crates[y] = crate;
          } else {
            this.crates[y] = crate + this.crates[y]; 
          }
        });
      }
      if (data[i].match(this.instructionRegEx) !== null) {
        this.instructions.push(data[i].match(this.numberRegEx)?.map((x) => parseInt(x) || 0) || []);
      }
    }
  }

  moveCrates = (move: number, from: number, to: number, lift: number) => {
    for (let n = 0; n < move - lift + 1; n++) {
      let crateSub = this.crates[from].substring(this.crates[from].length - lift, this.crates[from].length);
      this.crates[to] += crateSub;
      this.crates[from] = this.crates[from].substring(0, this.crates[from].length - lift);
    }
  }

  getTopLevelCrates = (data: string[]) => data.map((x) => x.charAt(x.length - 1)).join('');
}