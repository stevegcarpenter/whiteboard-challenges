'use strict';

const SLL = require('./sll');
const BST = require('./bst').BinarySearchTree;
const TreeNode = require('./bst').TreeNode;

// given a binary tree, return a link list
module.exports = (bTree) => {
  if (!bTree)
    throw new Error('binary tree must be true');
  if (typeof bTree !== 'object')
    throw new TypeError('binary tree must be an object');

  let keys = Object.keys(bTree).map(k => k.toLowerCase()).sort();
  if (keys[0] !== 'root' || keys.length !== 1)
    throw new TypeError('binary tree must only have a root property');
  if (typeof bTree.inOrderTraversal !== 'function')
    throw new Error('binary tree must support an in order traversal');

  // return null for an empty binary tree
  if (!bTree.root) return null;

  let sll = new SLL();
  bTree.inOrderTraversal(value => sll.insertAscending(value));

  return sll;
};
