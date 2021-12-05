import { keys } from 'ramda';
import { draws, boards } from './data.js';

const sumBoard = (board, indexedDraw) => {
  let count = 0;
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      count += !indexedDraw[board[j][i]] ? board[j][i] : 0;
    }
  }
  return count;
}

const checkBoard = (board, indexedDraw) => {
  for(let i = 0; i < board.length; i++) {
    let x = 0;
    let y = 0;
    for(let j = 0; j < board[i].length; j++) {
      x += indexedDraw[board[j][i]] ? 1 : 0;
      y += indexedDraw[board[i][j]] ? 1 : 0;
    }
    if (x >= 5 || y >= 5) return true;
  }
  return false;
}

const partOne = () => {
  draws.reduce((prev, next) => {
    const nextDraw = { ...prev, [next]: true };
    if (keys(nextDraw) < 5) return nextDraw;
    boards.forEach(board => {
      const isWin = checkBoard(board, nextDraw)
      if (isWin) {
        console.log('Part one', sumBoard(board, nextDraw) * next);
        throw new Error('FOUND');
      }
    });
    return nextDraw;
  }, {});
}

const partTwo = () => {
  let allBoards = boards;
  let nextDraw = {};
  let i = 0;

  while (allBoards.length) {
    nextDraw = { ...nextDraw, [draws[i++]]: true };
    if (keys(nextDraw) < 5) continue;
    allBoards.forEach((board, idx) => {
      const isWin = checkBoard(board, nextDraw)
      if (isWin) {
        if (allBoards.length === 1) {
          console.log(sumBoard('Part two', allBoards[0], nextDraw) * draws[i-1]);
          throw new Error('FOUND');
        }
        allBoards[idx] = null;
      }
    });
    allBoards = allBoards.filter(b => b !== null);
  }
}

partTwo();
