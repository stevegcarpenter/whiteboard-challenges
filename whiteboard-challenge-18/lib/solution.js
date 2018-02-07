'use strict';

// Find the node with the maximum number of children
module.exports = (ktree) => {
  if (!ktree) throw new Error('Error: k-ary tree arg is invalid');
  if (!ktree.root) throw new Error('Error: k-ary tree is empty');

  let max = ktree.root;
  ktree.breadthFirst(n => max.children.length < n.children.length ? max = n : null);

  return max;
};
