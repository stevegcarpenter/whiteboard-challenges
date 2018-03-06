'use strict';

const binaryTreeToLinkList = require('../lib/solution');
const BST = require('../lib/bst').BinarySearchTree;
const TreeNode = require('../lib/bst').TreeNode;

describe('Solution Module', () => {
  describe('#binaryTreeToLinkList', () => {
    describe('Valid', () => {
      it('should correctly build a Singly Link List from a Binary Tree', () => {
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
        let nodes = [
          new TreeNode(4),
          new TreeNode(2),
          new TreeNode(1),
          new TreeNode(3),
          new TreeNode(6),
          new TreeNode(7),
          new TreeNode(5),
        ];
        let bst = new BST();
        for (let node of nodes) {
          bst.insert(node);
        }

        // Now, modify the tree values so they aren't adhering to bst rules
        bst.root.value = 100;
        bst.root.left.value = 150;
        bst.root.left.left.value = 999;
        bst.root.left.right.value = 151;
        bst.root.right.value = 67;
        bst.root.right.left.value = 77;
        bst.root.right.right.value = 1;

        const sll = binaryTreeToLinkList(bst);
        expect(sll.head.value).toEqual(1);
        expect(sll.head.next.value).toEqual(67);
        expect(sll.head.next.next.value).toEqual(77);
        expect(sll.head.next.next.next.value).toEqual(100);
        expect(sll.head.next.next.next.next.value).toEqual(150);
        expect(sll.head.next.next.next.next.next.value).toEqual(151);
        expect(sll.head.next.next.next.next.next.next.value).toEqual(999);
      });
    });

    describe('Invalid', () => {
      it('should detect a false binary tree and throw an Error', () => {
        expect(() => binaryTreeToLinkList(null)).toThrow('binary tree must be true');
      });

      it('should detect a non binary tree and throw a TypeError', () => {
        expect(() => binaryTreeToLinkList({root: null, extraarg: null, extraextraarg: null}))
          .toThrow('binary tree must only have a root property');
      });

      it('should detect an empty tree and return null', () => {

      });
    });
  });
});
