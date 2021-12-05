import input from './data.js';

const data = input.trim().split("\n").map(n => parseInt(n, 10));

const solvePartOne = (input) =>
  input.reduce((prev, next, idx) => {
    if (idx === 0) return 0;
    return prev + (input[idx-1] < next ? 1 : 0);
  }, 0);

console.log('Part one', solvePartOne(data));

const solvePartTwo = (input) =>
  input.reduce((prev, next, idx) => {
    if (idx < 3) return 0;
    return prev + (
      input[idx-1] + input[idx-2] + input[idx-3] <
      input[idx] + input[idx-1] + input[idx-2]
        ? 1
        : 0);
  }, 0);

console.log('Part two', solvePartTwo(data));
