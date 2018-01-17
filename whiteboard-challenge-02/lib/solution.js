'use strict';

const solution = module.exports = {};

solution.maxAndNextMax = function (numbers) {
  if (!numbers || !Array.isArray(numbers)) return null;
  if (numbers.length < 2) return null;
  if (!numbers.every(n => typeof n === 'number')) return null;
  return numbers.reduce((acc, cur) => {
    if (cur > acc.max) {
      acc.nextmax = acc.max;
      acc.max = cur;
    } else if (cur > acc.nextmax) {
      acc.nextmax = cur;
    }
    return acc;
  }, {'max': -Infinity, 'nextmax': -Infinity});
};
