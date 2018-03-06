const TreeNode = require('./lib/bst').TreeNode;
const BinarySearchTree = require('./lib/bst').BinarySearchTree;
const areBstsAlike = require('./lib/solution');

let nodesA = [
  new TreeNode(4),
  new TreeNode(2.5),
  new TreeNode(1),
  new TreeNode(3),
  new TreeNode(6.5),
  new TreeNode(7),
  new TreeNode(5),
];
let bstA = new BinarySearchTree();
for (let node of nodesA) {
  bstA.insert(node);
}

let nodesB = [
  new TreeNode(4),
  new TreeNode(2),
  new TreeNode(1),
  new TreeNode(3),
  new TreeNode(6),
  new TreeNode(7),
  new TreeNode(5),
];
let bstB = new BinarySearchTree();
for (let node of nodesB) {
  bstB.insert(node);
}

areBstsAlike(bstA, bstB);

// Build the following tree
//                       7
//
//               6
//
//                       5
//
//         4
//
//                       3
//
//               2
//
//                       1
//
