'use strict';

const KTree = require('../lib/kary');
const findLeaves = require('../lib/solution');

describe('Solution Module', () => {
  describe('#findLeaves', () => {
    let t = new KTree();
    t.insert(1);
    t.insert(2, 1);
    t.insert(3, 1);
    t.insert(4, 1);
    t.insert(5, 2);
    t.insert(6, 3);
    t.insert(7, 4);

    it('should find all the leaf nodes', () => {
      let leaves = findLeaves(t);
      expect(leaves[0].value).toBe(5);
      expect(leaves[1].value).toBe(6);
      expect(leaves[2].value).toBe(7);
    });

    it('should throw an error if the tree passed in is falsey', () => {
      expect(() => findLeaves(null)).toThrow('Error: k-ary tree arg is invalid');
    });

    it('should throw an error if the root node reference is null', () => {
      let t2 = new KTree();
      expect(() => findLeaves(t2)).toThrow('Error: k-ary tree is empty')
    });
  });
});
