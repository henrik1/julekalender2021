import data from './input.js';

const depth = (str, idx) => {
  if(idx >= str.length) return [0, idx+1];
  if (str[idx] === ' ') return [0, idx+1];
  if (str[idx] === '(') {
    const d = str.slice(idx-6, idx) === 'Grinch' ? 0 : 1;
    const [l, rl] = depth(str, idx+1);
    const [r, rr] = depth(str, rl);
    return [Math.max(l+d, r+d), rr];
  }
  return depth(str, idx+1);
}

console.log('Svar', depth(data, 0)[0]);
