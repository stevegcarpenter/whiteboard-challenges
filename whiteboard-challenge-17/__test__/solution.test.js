'use strict';

const KTree = require('../lib/kary');
const sumNodes = require('../lib/solution');

describe('Solution Module', () => {
  describe('#sumNodes', () => {
    let t = new KTree();
    t.insert(1);
    t.insert(2, 1);
    t.insert(3, 1);
    t.insert(4, 1);
    t.insert(5, 2);
    t.insert(6, 3);
    t.insert(7, 4);

    it('should sum all the leaf nodes', () => {
      expect(sumNodes(t)).toBe(28);
    });

    it('should throw an error if the tree passed in is falsey', () => {
      expect(() => sumNodes(null)).toThrow('Error: k-ary tree arg is invalid');
    });

    it('should throw an error if the root node reference is null', () => {
      let t2 = new KTree();
      expect(() => sumNodes(t2)).toThrow('Error: k-ary tree is empty')
    });
  });
});
