"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnumKeyByEnumValue = exports.getInput = void 0;
const fs_1 = __importDefault(require("fs"));
const getInput = (day) => {
    return fs_1.default.readFileSync(`src/day/day-${String(day).padStart(2, '0')}/input.txt`, 'utf-8').toString().trim().split('\n');
};
exports.getInput = getInput;
function getEnumKeyByEnumValue(myEnum, enumValue) {
    let keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue);
    return keys.length > 0 ? keys[0] : null;
}
exports.getEnumKeyByEnumValue = getEnumKeyByEnumValue;
