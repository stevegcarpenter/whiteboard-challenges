'use strict';

const solution = module.exports = {};

solution.checkBraces = (squigleys) => {
  let stack = 0;
  // squigleys must be a string
  if (typeof squigleys !== 'string') throw new Error('Ooops');
  for (let i = 0; i < squigleys.length; i++) {
    if (squigleys[i] === '{') stack++;
    else if (squigleys[i] === '}') {
      // this denotes a closing brace when no opening one existed
      if (stack === 0) return false;
      stack--;
    }
  }
  // this denotes too many opening braces
  if (stack) return false;
  // a perfect match of braces
  return true;
};
