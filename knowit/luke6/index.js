import data from './input.js';
import { insert, pipe } from 'ramda';

const addParcel = (x, length, grid, row) =>
  pipe(
    g => g[row] ? g : insert(row, new Array(21).fill(false), g),
    g => {
      for(let i = x; i < x + length; i++) {
        g[row][i] = true;
      }
      return g;
    }
  )(grid);

const hasSupport = (x, length, grid) => {
  let row = grid.length-1;
  const left = { x1: x, x2: x + Math.ceil(length/2) };
  const right = { x1: x + Math.floor(length/2), x2: x + length };
  while (row >= 0) {
    const supportLeft = grid[row].slice(left.x1, left.x2).some(x => x);
    const supportRight = grid[row].slice(right.x1, right.x2).some(x => x);
    if (supportLeft && supportRight) {
      return [true, row];
    } else if (!supportRight && !supportLeft) {
      row--;
    } else if (supportRight || supportLeft) {
      return [false, 0];
    }
  }
  return [true, -1];
}

const [count] = data.reduce(([falloff, grid], [x, length]) => {
  const [supported, supportRow] = hasSupport(x, length, grid);
  const res = supported ? addParcel(x, length, grid, supportRow+1) : grid;
  return supported ? [falloff, res] : [falloff+1, grid];
}, [0, []]);

console.log('SVAR', count);
