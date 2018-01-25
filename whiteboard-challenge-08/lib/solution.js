'use strict';

const Node = require('./nd');

module.exports = (a, b) => {
  if (!a || !b) throw new Error('Ooops');
  let lookup = {};
  let newlist = null;

  // add all values in list a to lookup
  for (let itr = a; itr; itr = itr.next) {
    lookup[itr.value] = true;
  }

  for (let itr = b; itr; itr = itr.next) {
    if (lookup[itr.value]) {
      let n = new Node(itr.value);
      n.next = newlist;
      newlist = n;
    }
  }

  return newlist;
};
