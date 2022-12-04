import Day from '../day';

const RPS: { [index: string]: number } = {
  'Rock': 1,
  'Paper': 2,
  'Scissors': 3,
  'A': 1,
  'B': 2,
  'C': 3,
  'X': 1,
  'Y': 2,
  'Z': 3,
  'Loss': 0,
  'Draw': 3,
  'Win': 6,
};

export class Day02 extends Day {
  part1 = (data: string[]): number => {
    let score = 0;
    for (let i = 0; i < data.length; i++) {
      let opponent: string = data[i].split(/ /g)[0];
      let self: string = data[i].split(/ /g)[1];
      score += this.getWinValue(self, opponent) + RPS[self];
    }
    return score;
  };
  
  part2 = (data: string[]): number => {
    let score = 0;
    for (let i = 0; i < data.length; i++) {
      let opponent: string = data[i].split(/ /g)[0];
      let outcome: string = data[i].split(/ /g)[1];
      let self = this.getOutcomeMove(opponent, outcome);
      score += this.getWinValue(self, opponent) + RPS[self];
    }
    return score;
  };

  getOutcomeMove = (a: string, outcome: keyof typeof RPS): string => {
    const outcomes: { [index: string]: number } = {
      X: RPS.Loss,
      Y: RPS.Draw,
      Z: RPS.Win,
    };
    outcome = outcomes[outcome];
    if (outcome === RPS.Loss) {
      if (RPS[a] === RPS.Rock) {
        return 'Scissors';
      } else if (RPS[a] === RPS.Paper) {
        return 'Rock';
      } else {
        return 'Paper';
      }
    } else if (outcome === RPS.Win) {
      if (RPS[a] === RPS.Rock) {
        return 'Paper';
      } else if (RPS[a] === RPS.Paper) {
        return 'Scissors';
      } else {
        return 'Rock';
      }
    } else {
      return a;
    }
  };

  getWinValue = (a: string, b: string): number => {
    if (RPS[a] === RPS[b]) {
      return RPS.Draw;
    } else {
      if (RPS[a] === RPS.Rock) {
        if (RPS[b] === RPS.Scissors) {
          return RPS.Win;
        } else {
          return RPS.Loss;
        }
      } else if (RPS[a] === RPS.Paper) {
        if (RPS[b] === RPS.Rock) {
          return RPS.Win;
        } else {
          return RPS.Loss;
        }
      } else {
        if (RPS[b] === RPS.Paper) {
          return RPS.Win;
        } else {
          return RPS.Loss;
        }
      }
    }
  };
}