'use strict';

const solution = module.exports = {};

solution.traverse = (engine) => {
  let tot = 0;
  let keys;

  if (!engine ) return null;
  if (typeof engine !== 'object') return null;

  for (let tmp = engine; tmp; tmp = tmp.next) {
    keys = Object.keys(tmp);
    if (keys.length !== 2) return null;
    if (!keys.includes('value') || !keys.includes('next')) return null;
    if (tmp.value < 0) return null;
    if (typeof tmp.value !== 'number') return null;

    tot += tmp.value;
  }

  return tot;
};
