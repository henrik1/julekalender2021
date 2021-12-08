import crabs from './input.js';

const partOne = () => {
  let maxX = Math.max.apply(this, crabs);

  const moves = [...new Array(maxX).keys()].reduce((minDistance, xn) => {
    let distance = 0;
    crabs.forEach((cx) => { distance += Math.abs(xn - cx); })
    return Math.min(minDistance, distance);
  }, Infinity);

  console.log('PT1', moves);
}
partOne();

const partTwo = () => {
  let maxX = Math.max.apply(this, crabs);

  const fuel = [...new Array(maxX).keys()].reduce((minDistance, xn) => {
    let fuel = 0;
    crabs.forEach((cx) => {
      const distance = (Math.abs(xn - cx));
      fuel += (distance * (distance + 1)) / 2;
    });
    return Math.min(minDistance, fuel);
  }, Infinity);

  console.log('PT2', fuel);
}
partTwo();
