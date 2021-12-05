import { haversine, findClosest } from './haversine.js';
import input from './input.js';

let points = input
const northPole = [0,90];
let origin = northPole;
let total = 0;

while(points.length) {
  const { distance, idx } = findClosest(origin, points);
  origin = points[idx];
  points = points.slice(0, idx).concat(points.slice(idx+1, points.length));
  total += distance;
}

total += haversine(origin, northPole);

console.log('Svar', Math.round(total / 1000));
