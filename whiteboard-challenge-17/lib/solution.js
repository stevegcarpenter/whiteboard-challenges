'use strict';

// Find the sum of all nodes
module.exports = (ktree) => {
  if (!ktree) throw new Error('Error: k-ary tree arg is invalid');
  if (!ktree.root) throw new Error('Error: k-ary tree is empty');

  let sum = 0;
  ktree.breadthFirst(node => sum += node.value);

  return sum;
};
