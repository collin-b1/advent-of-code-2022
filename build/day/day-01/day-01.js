"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day01 = void 0;
const day_1 = __importDefault(require("../day"));
class Day01 extends day_1.default {
    constructor() {
        super(...arguments);
        this.part1 = (data) => this.getCalorieArray(data).sort((a, b) => b - a)[0];
        this.part2 = (data) => this.getCalorieArray(data).sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a + b);
        this.getCalorieArray = (data) => {
            const sums = [];
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
}
exports.Day01 = Day01;
