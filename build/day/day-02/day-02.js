"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day02 = void 0;
const day_1 = __importDefault(require("../day"));
const RPS = {
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
class Day02 extends day_1.default {
    constructor() {
        super(...arguments);
        this.part1 = (data) => {
            let score = 0;
            for (let i = 0; i < data.length; i++) {
                let opponent = data[i].split(/ /g)[0];
                let self = data[i].split(/ /g)[1];
                score += this.getWinValue(self, opponent) + RPS[self];
            }
            return score;
        };
        this.part2 = (data) => {
            let score = 0;
            for (let i = 0; i < data.length; i++) {
                let opponent = data[i].split(/ /g)[0];
                let outcome = data[i].split(/ /g)[1];
                let self = this.getOutcomeMove(opponent, outcome);
                score += this.getWinValue(self, opponent) + RPS[self];
            }
            return score;
        };
        this.getOutcomeMove = (a, outcome) => {
            const outcomes = {
                X: RPS.Loss,
                Y: RPS.Draw,
                Z: RPS.Win,
            };
            outcome = outcomes[outcome];
            if (outcome === RPS.Loss) {
                if (RPS[a] === RPS.Rock) {
                    return 'Scissors';
                }
                else if (RPS[a] === RPS.Paper) {
                    return 'Rock';
                }
                else {
                    return 'Paper';
                }
            }
            else if (outcome === RPS.Win) {
                if (RPS[a] === RPS.Rock) {
                    return 'Paper';
                }
                else if (RPS[a] === RPS.Paper) {
                    return 'Scissors';
                }
                else {
                    return 'Rock';
                }
            }
            else {
                return a;
            }
        };
        this.getWinValue = (a, b) => {
            if (RPS[a] === RPS[b]) {
                return RPS.Draw;
            }
            else {
                if (RPS[a] === RPS.Rock) {
                    if (RPS[b] === RPS.Scissors) {
                        return RPS.Win;
                    }
                    else {
                        return RPS.Loss;
                    }
                }
                else if (RPS[a] === RPS.Paper) {
                    if (RPS[b] === RPS.Rock) {
                        return RPS.Win;
                    }
                    else {
                        return RPS.Loss;
                    }
                }
                else {
                    if (RPS[b] === RPS.Paper) {
                        return RPS.Win;
                    }
                    else {
                        return RPS.Loss;
                    }
                }
            }
        };
    }
}
exports.Day02 = Day02;
