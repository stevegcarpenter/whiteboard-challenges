'use strict';

const Node = require('./nd');

module.exports = (a, b) => {
  if (!a || !b) throw new Error('Ooops');
  let lookup = {};
  let newlist = null;
  for (let c = 0, process = a; c < 2; c++, process = b) {
    for (let itr = process; itr; itr = itr.next) {
      if (!lookup[itr.value]) {
        lookup[itr.value] = true;
        let n = new Node(itr.value);
        n.next = newlist;
        newlist = n;
      }
    }
  }

  return newlist;
};
