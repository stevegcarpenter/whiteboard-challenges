'use strict';

const solution = module.exports = {};

solution.fibR = n => {
  if (typeof n !== 'number' || n < 0)
    throw new Error('invalid n value');

  if (n === 0) return 0;
  if (n === 1) return 1;

  return solution.fibR(n - 1) + solution.fibR(n - 2);
};

// Use Dynamic Programming to solve
solution.fibI = n => {
  if (typeof n !== 'number' || n < 0)
    throw new Error('invalid n value');

  let cache = [ 0, 1 ];

  // build up from the bottom
  for (let i = 2; i <= n; i++) {
    // calculate and cache fib(n) values
    cache.push(cache[i - 1] + cache[i - 2]);
  }

  return cache[n];
};
