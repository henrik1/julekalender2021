import { cond } from 'ramda';
import input from './input.js';
import arr from './input.js';

const partOne = () => {
  let fish = '3,4,3,1,2'.split(',').map(i => parseInt(i, 10));

  const days = 80;

  for(let i = 0; i < days; i++) {
    const spawn = [];
    for(let j = 0; j < fish.length; j++) {
      fish[j] = cond([
        [n => (n === 0), () => { spawn.push(8); return 6; }],
        [n => (n > 0), () => fish[j]-1]
      ])(fish[j]);
    }
    fish = fish.concat(spawn);
  }

  console.log(fish.length);
}

partOne();

const partTwo = () => {
  const DAYS = 256;

  const days = new Array(DAYS).fill(0).reduce((prev) => {
    let next = prev.slice(1);
    next[6] = prev[7] + prev[0];
    next = [...next, prev[0]];
    return next;
  }, input);

  const sum = days.reduce((prev, next,) => prev + next, 0)

  console.log('PT2', sum);
}

partTwo();
