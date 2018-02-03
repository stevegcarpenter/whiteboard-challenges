'use strict';

const KTree = require('../lib/kary');

describe('K-Ary Tree Module', () => {
  describe('#insert', () => {
    it('should throw an error if value is falsey', () => {
      let t = new KTree();
      expect(() => t.insert(null)).toThrow('Error: value is falsey and non-zero');
    });

    it('should only allow one arg on the first call to insert', () => {
      let t = new KTree();
      t.insert(1);
      expect(() => t.insert(2)).toThrow('Error: parentVal is falsey and non-zero');
    });

    it('should insert values properly', () => {
      let t = new KTree();
      t.insert(1);
      t.insert(2, 1);
      t.insert(3, 2);
      t.insert(4, 2);
      t.insert(5, 2);

      expect(t.root.value).toBe(1);
      expect(t.root.children.length).toBe(1);
      expect(t.root.children[0].value).toBe(2);
      expect(t.root.children[0].children.length).toBe(3);
      expect(t.root.children[0].children[0].value).toBe(3);
      expect(t.root.children[0].children[1].value).toBe(4);
      expect(t.root.children[0].children[2].value).toBe(5);
    });
  });

  describe('#removeByVal', () => {
    it('should throw an error if the value is falsey', () => {
      let t = new KTree();
      t.insert(1);
      t.insert(2, 1);

      expect(() => t.removeByVal(null)).toThrow('Error: value is falsey and non-zero');
    });

  });

  describe('#breadthFirst', () => {

  });
});
