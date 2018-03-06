'use strict';

const BST = require('./bst').BinarySearchTree;

// Check for tree likeness
// This means only the structure needs to match
// Node values are irrelevant
module.exports = (bstA, bstB) => {
  if (!bstA || !bstB)
    throw new Error('both trees must be valid');
  if (!(bstA instanceof BST) || !(bstB instanceof BST))
    throw new TypeError('both trees must be BinarySearchTrees');

  return recurseForAlikeness(bstA.root, bstB.root);
};

function recurseForAlikeness(nodeA, nodeB) {
  // At least one node is valid
  if (nodeA || nodeB) {
    // They both must be valid
    if (!nodeA) return false;
    if (!nodeB) return false;
  }
  // Both nodes are null
  if (!nodeA && !nodeB) {
    return true;
  }

  // Check left sub-tree
  if (!recurseForAlikeness(nodeA.left, nodeB.left)) return false;
  // Check right sub-tree
  if (!recurseForAlikeness(nodeA.right, nodeB.right)) return false;

  // trees are alike
  return true;
}
