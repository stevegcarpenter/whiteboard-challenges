'use strict';

const dedupe = require('../lib/solution');
const SLL = require('../lib/sll');

describe('Solution Module', () => {
  describe('#dedupe', () => {
    // [ 1 ]->[ 1 ]->[ 2 ]->[ 3 ]->[ 4 ]->[ 4 ]->[ 5 ]->null
    it('should correctly remove consecutive duplicates from the list', () => {
      // [ 1 ]->[ 4 ]->[ 5 ]->[ 5 ]->null
      let sll = new SLL();
      sll.insertHead(5);
      sll.insertHead(5);
      sll.insertHead(4);
      sll.insertHead(1);
      let newsll = dedupe(sll.head);

      // Expected Output: [ 1 ]->[ 4 ]->[ 5 ]->null
      expect(newsll.value).toBe(1);
      expect(newsll.next.value).toBe(4);
      expect(newsll.next.next.value).toBe(5);
    });

    it('should throw an error if the list arg is falsey', () => {
      expect(() => dedupe(null)).toThrow('Error: head is falsey');
      expect(() => dedupe(NaN)).toThrow('Error: head is falsey');
      expect(() => dedupe(undefined)).toThrow('Error: head is falsey');
    });

    it('should work properly if a single node list is passed in', () => {
      let sll = new SLL();
      sll.insertHead(1);
      let newsll = dedupe(sll.head);
      expect(newsll.value).toBe(1);
      expect(newsll.next).toBe(null);
    });
  });
});
