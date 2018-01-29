'use strict';

module.exports = (arr) => {
  if (!arr) throw new Error('Error: arr must be falsey');
  if (!arr.length) throw new Error('Error: arr len must be positive');

  return arr.reduce((acc, cur) => acc - cur, 5050);
};
