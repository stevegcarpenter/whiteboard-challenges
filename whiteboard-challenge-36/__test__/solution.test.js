'use strict';

const areBstsAlike = require('../lib/solution');
const BST = require('../lib/bst').BinarySearchTree;
const TreeNode = require('../lib/bst').TreeNode;

describe('Solution Module', () => {
  describe('#areBstsAlike', () => {
    describe('Valid', () => {
      it('should find these trees to be alike even though they have slightly different values', () => {
        // Build the following tree
        //                       7
        //
        //               6.5
        //
        //                       5
        //
        //         4
        //
        //                       3
        //
        //               2.5
        //
        //                       1
        //
        let nodesA = [
          new TreeNode(4),
          new TreeNode(2.5),
          new TreeNode(1),
          new TreeNode(3),
          new TreeNode(6.5),
          new TreeNode(7),
          new TreeNode(5),
        ];
        let bstA = new BST();
        for (let node of nodesA) {
          bstA.insert(node);
        }

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
        let nodesB = [
          new TreeNode(4),
          new TreeNode(2),
          new TreeNode(1),
          new TreeNode(3),
          new TreeNode(6),
          new TreeNode(7),
          new TreeNode(5),
        ];
        let bstB = new BST();
        for (let node of nodesB) {
          bstB.insert(node);
        }

        expect(areBstsAlike(bstA, bstB)).toEqual(true);
      });

      it('should report that two empty BSTs are alike', () => {
        expect(areBstsAlike(new BST(), new BST())).toEqual(true);
      });
    });

    describe('Invalid', () => {
      it('should detect two trees that are not alike and return false', () => {
        // Build the following tree
        //                       7
        //
        //               6.5
        //
        //                       5
        //
        //         4
        //
        //                       3
        //
        //               2.5
        //
        //                       1
        //
        //                             0.5
        //
        let nodesA = [
          new TreeNode(4),
          new TreeNode(2.5),
          new TreeNode(1),
          new TreeNode(3),
          new TreeNode(6.5),
          new TreeNode(7),
          new TreeNode(5),
          new TreeNode(.5),
        ];
        let bstA = new BST();
        for (let node of nodesA) {
          bstA.insert(node);
        }

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
        let nodesB = [
          new TreeNode(4),
          new TreeNode(2),
          new TreeNode(1),
          new TreeNode(3),
          new TreeNode(6),
          new TreeNode(7),
          new TreeNode(5),
        ];
        let bstB = new BST();
        for (let node of nodesB) {
          bstB.insert(node);
        }

        expect(areBstsAlike(bstA, bstB)).toEqual(false);
      });

      it('should detect a false tree for BST A and throw an Error', () => {
        expect(() => areBstsAlike(null, new BST())).toThrow('both trees must be valid');
      });

      it('should detect a false tree for BST B and throw an Error', () => {
        expect(() => areBstsAlike(new BST(), null)).toThrow('both trees must be valid');
      });

      it('should detect a non-BST item and throw a TypeError', () => {
        expect(() => areBstsAlike({}, new BST())).toThrow('both trees must be BinarySearchTrees');
        expect(() => areBstsAlike(new BST(), {})).toThrow('both trees must be BinarySearchTrees');
      });
    });
  });
});
