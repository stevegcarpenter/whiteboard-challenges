'use strict';

const Ktree = require('./kary');

// Find all leaves
module.exports = (ktree) => {
  if (!ktree) throw new Error('Error: k-ary tree arg is invalid');
  if (!ktree.root) throw new Error('Error: k-ary tree is empty');
  if (!(ktree instanceof Ktree)) throw new Error('Error: ktree arg has invalid type');

  let leaves = [];
  ktree.breadthFirst(node => node.children.length ? null : leaves.push(node));
};
