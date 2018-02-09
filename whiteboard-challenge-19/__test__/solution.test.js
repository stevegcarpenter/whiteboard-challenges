'use strict';

const KTree = require('../lib/kary');
const makeSLL = require('../lib/solution');

describe('Solution Module', () => {
  describe('#makeSLL', () => {
    let t = new KTree();
    t.insert(2);
    t.insert(1, 2);
    t.insert(1, 2);
    t.insert(-3, 2);

    it('should traverse the tree and generate a proper sorted Single Link List', () => {
      let list = makeSLL(t);
      console.log(JSON.stringify(t));
      expect(list.head.value).toBe(-3);
      expect(list.head.next.value).toBe(1);
      expect(list.head.next.next.value).toBe(1);
      expect(list.head.next.next.next.value).toBe(2);
    });

    it('should throw an error if the tree passed in is falsey', () => {
      expect(() => makeSLL(null)).toThrow('Error: k-ary tree arg is invalid');
    });

    it('should throw an error if the root node reference is null', () => {
      let t2 = new KTree();
      expect(() => makeSLL(t2)).toThrow('Error: k-ary tree is empty');
    });
  });
});
