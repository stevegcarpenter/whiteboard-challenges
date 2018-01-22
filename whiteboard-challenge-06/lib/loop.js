'use strict';

let loop = (count, callback) => {
  if (count < 0) return;
  if (typeof count !== 'number') return;
  if (typeof callback !== 'function') return;
  if (count === 0) return;

  callback();
  loop(count - 1, callback);
};

module.exports = loop;

