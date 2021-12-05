import data from './input.js';

const res = data.reduce(([prevMax, prevIdx], next, i) => {
  let [max, snille, slemme] = [0, data[i] === 'J' ? 1 : 0, data[i] === 'N' ? 1 : 0];
  for(let j = i + 1; j < data.length; j++) {
    snille += data[j] === 'J' ? 1 : 0;
    slemme += data[j] === 'N' ? 1 : 0;
    max = snille === slemme ? snille + slemme : max;
  }
  return max > prevMax ? [max, i] : [prevMax, prevIdx];
}, [0,0]);

console.log('Svar: ', res);
