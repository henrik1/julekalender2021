import {cond, map, pipe, T} from 'ramda';
import input from './demoInput.js';

const partOne = () => {
  const getValue = cond([
    [n => n.length === 2, () => 1],
    [n => n.length === 3, () => 1],
    [n => n.length === 4, () => 1],
    [n => n.length === 7, () => 1],
    [T, () => 0]
  ]);

  let sum = 0;

  input.forEach(row => {
    row[1].forEach(sample => {
      sum += getValue(sample)
    })
  });

  console.log('PT1', sum);
}

partOne();

const partTwo = () => {

  const LETTERS = 'abcdefg'.split('');

  const DISPLAY = {
    cf: 1,
    acf: 7,
    bcdf: 4,
    acdfg: 3,
    acdeg: 2,
    abdfg: 5,
    abdefg: 6,
    abcefg: 0,
    abcdfg: 9,
    abcdefg: 8,
  }

  const decode = (samples) => {
    const frequency = samples.join('').split('').reduce((prev, next) => ({
      ...prev,
      [next]: (prev[next] || 0) + 1
    }), {});

    const one = samples.find(sample => sample.length === 2);
    const seven = samples.find(sample => sample.length === 3);
    const four = samples.find(sample => sample.length === 4);

    const B = LETTERS.find(l => frequency[l] === 6);
    const E = LETTERS.find(l => frequency[l] === 4);
    const F = LETTERS.find(l => frequency[l] === 9);

    const C = one.split('')
      .filter(a => a !== F)[0];

    const A = seven
      .split('')
      .filter(a => a !== F)
      .filter(a => a !== C)[0];

    const D = four
      .split('')
      .filter(a => a !== C)
      .filter(a => a !== B)
      .filter(a => a !== F)[0];

    const G = LETTERS
      .find(letter => [A, B, C, D, E, F].indexOf(letter) === -1);

    return { [A]: 'a', [B]: 'b', [C]: 'c', [D]: 'd', [E]: 'e', [F]: 'f', [G]: 'g' };
  }

  let sum = 0

  input.forEach(([samples, output]) => {
    const codes = decode(map(s => s.split('').sort().join(''), samples));
    const decodedOutput = output.map(
      pipe(
        seq => seq.split(''),
        seq => seq.map(l => codes[l]),
        seq => seq.sort(),
        seq => seq.join(''),
        seq => DISPLAY[seq]
      )
    ).join('')

    sum += parseInt(decodedOutput, 10);
  });

  console.log('PT2', sum);
}

partTwo();
