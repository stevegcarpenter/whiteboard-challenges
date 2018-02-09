'use strict';

const SLL = require('./sll');

// Find the node with the maximum number of children
module.exports = (ktree) => {
  if (!ktree) throw new Error('Error: k-ary tree arg is invalid');
  if (!ktree.root) throw new Error('Error: k-ary tree is empty');

  let list = new SLL();

  ktree.breadthFirst(n => list.insertAscending(n.value));

  return list;
};
