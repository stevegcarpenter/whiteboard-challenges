'use strict';

// Find all leaves
module.exports = (ktree) => {
  if (!ktree) throw new Error('Error: k-ary tree arg is invalid');
  if (!ktree.root) throw new Error('Error: k-ary tree is empty');

  let leaves = [];
  ktree.breadthFirst(node => node.children.length ? null : leaves.push(node));

  return leaves;
};
