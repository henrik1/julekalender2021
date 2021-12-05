import input from './data.js';

const partOne = () => {
  let gamma = "";
  let epsilon = "";

  for(let col = 0; col < input[0].length; col++) {
    let ones = 0;
    let zeros = 0;
    for(let row = 0; row < input.length; row++) {
      ones += input[row][col] === "1" ? 1 : 0;
      zeros += input[row][col] === "0" ? 1 : 0;
    }
    gamma = `${gamma}${ones > zeros ? 1 : 0}`;
    epsilon = `${epsilon}${ones < zeros ? 1 : 0}`;
  }

  console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
}

const findMostCommon = (col, data) => {
  let ones = 0;
  let zeros = 0;
  for(let row = 0; row < data.length; row++) {
    ones += data[row][col] === "1" ? 1 : 0;
    zeros += data[row][col] === "0" ? 1 : 0;
  }
  return ones >= zeros ? 1 : 0;
}

const findLeastCommon = (col, data) => {
  let ones = 0;
  let zeros = 0;
  for(let row = 0; row < data.length; row++) {
    ones += data[row][col] === "1" ? 1 : 0;
    zeros += data[row][col] === "0" ? 1 : 0;
  }
  return zeros <= ones ? 0 : 1;
}

const partTwo = () => {
  const filterBy = (col, value, list) => (
    list.filter(str => str[col] == value)
  )

  const findOxygenRating = (col = 0, data) => {
    const mostCommon = findMostCommon(col, data);
    const nextData = filterBy(col, `${mostCommon}`, data);
    if (nextData.length === 1) {
      return nextData[0];
    }
    return findOxygenRating(col + 1, nextData);
  }

  const findScrubberRating = (col = 0, data) => {
    const mostCommon = findLeastCommon(col, data);
    const nextData = filterBy(col, `${mostCommon}`, data);
    if (nextData.length === 1) {
      return nextData[0];
    }
    return findScrubberRating(col + 1, nextData);
  }

  const oxygenRating = parseInt(findOxygenRating(0, input), 2);
  const scrubberRating = parseInt(findScrubberRating(0, input), 2);

  console.log(oxygenRating * scrubberRating);
}

partTwo();
