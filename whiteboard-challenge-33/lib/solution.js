'use strict';

module.exports = (base, exp) => {
  if (typeof base !== 'number')
    throw new TypeError('invalid base type: must be number');
  if (typeof exp !== 'number')
    throw new TypeError('invalid exp type: must be number');
  if (base < 0)
    throw new TypeError('base must be positive');

  return Math.pow(base, exp)
    .toString()
    .split('')
    .reduce((acc, cur) => parseInt(cur) !== NaN ? acc + parseInt(cur) : acc, 0);
};
