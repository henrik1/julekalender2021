import parse from './parse.js';
import data from './data.js';
import { cond, times } from 'ramda';

const input = parse(data);

const plot = (data, diag) => {
  let res = {};
  const traverse = cond([
    [([[x1], [x2]]) => x1 === x2, ([[x1, y1], [x2, y2]]) => {
      let y = Math.min(y1, y2);
      times(() => {
        res[`${x1}_${y}`] = (res[`${x1}_${y}`] || 0) + 1;
        y++;
      }, Math.abs(y2 - y1) + 1);
    }],
    [([[x1, y1], [x2, y2]]) => y1 === y2, ([[x1, y1], [x2, y2]]) => {
      let x = Math.min(x1, x2);
      times(() => {
        res[`${x}_${y1}`] = (res[`${x}_${y1}`] || 0) + 1;
        x++;
      }, Math.abs(x2 - x1) + 1);
    }],
    [() => diag, ([[x1, y1], [x2, y2]]) => {
      let x = x1;
      let y = y1;
      const dx = x1 > x2 ? -1 : 1;
      const dy = y1 > y2 ? -1 : 1;
      times(() => {
        res[`${x}_${y}`] = (res[`${x}_${y}`] || 0) + 1;
        x += dx;
        y += dy;
      }, Math.abs(x2 - x1) + 1);
    }]
  ]);

  data.map(traverse);
  return res;
}

console.log('Part one', Object.values(plot(input)).filter(v => v > 1).length);

console.log('Part two', Object.values(plot(input, true)).filter(v => v > 1).length);
