'use strict';

const Node = require('./nd');

// return the nth from the last node
module.exports = (head, n) => {
  if (!head || n < 0) throw new Error('Ooops');

  // Find the length of the list - verify type while at it
  for (var itr = head, len = 0; itr; itr = itr.next, len++) {
    if (!(itr instanceof Node)) throw new Error('Ooops');
  }

  // n must be less then the length
  if (n >= len) throw new Error('Ooops');

  // Find it
  let i;
  for (itr = head, i = 0; i < len - n - 1; itr = itr.next, i++);

  return itr;
};
