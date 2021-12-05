import { pipe } from 'ramda';
import input from './data.js';

const partOne = () => {
  const commands = {
    forward: ([horiz, depth], dx) => [horiz + dx, depth],
    down: ([horiz, depth], dx) => [horiz, depth + dx],
    up: ([horiz, depth], dx) => [horiz, depth - dx],
  };

  const result = pipe(
    input => input.trim().split("\n"),
    rows => rows.map(row => row.split(' ')),
    actions => actions.reduce((prev, next) => (
      commands[next[0]](prev, parseInt(next[1]))
    ), [0, 0]),
    ([horiz, depth]) => horiz * depth
  )(input);

  console.log('Part one', result);
}

const partTwo = () => {
  const commands = {
    forward: ([horiz, depth, aim], dx) => [horiz + dx, depth + (aim * dx), aim],
    down: ([horiz, depth, aim], dx) => [horiz, depth, aim + dx],
    up: ([horiz, depth, aim], dx) => [horiz, depth, aim - dx],
  };

  const result = pipe(
    input => input.trim().split("\n"),
    rows => rows.map(row => row.split(' ')),
    actions => actions.reduce((prev, next) => (
      commands[next[0]](prev, parseInt(next[1]))
    ), [0, 0, 0]),
    ([horiz, depth]) => horiz * depth
  )(input);

  console.log('Part two', result);
}

partOne();
partTwo();
