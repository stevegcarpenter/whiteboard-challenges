'use strict';

const solution = module.exports = {};

solution.findMiddleNode = (head) => {
  if (!head) return null;
  var itr, itr2;

  // validate that the list contents all contain only two properties
  // and that those properties are 'value' and 'next'
  for (itr = head; itr; itr = itr.next) {
    // If it's not an object something is wrong
    if (typeof itr !== 'object') return null;

    let keys = Object.keys(itr);
    // return null if invalid number of keys exists in the node
    if (keys.length !== 2) return null;
    // return null if either of the keys isn't what we expect
    if (!keys.includes('value') || !keys.includes('next')) return null;
  }

  // Iterate all the way to the end of the list with itr2 at which point itr will be half
  // way to the end of the list
  for (itr = itr2 = head; itr2.next && itr2.next.next; itr = itr.next, itr2 = itr2.next.next);

  return itr;
};
