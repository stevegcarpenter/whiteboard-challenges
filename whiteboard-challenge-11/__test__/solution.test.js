'use strict';

const calculateMissing = require('../lib/solution');

describe('Solution Module', () => {
  describe('#calculateMissing', () => {
    let arr = [...Array(100)].map((e, i) => e = i + 1);
    arr.splice(9, 1);
    it('should indicate the missing number is 10', () => {
      expect(calculateMissing(arr)).toBe(10);
    });

    it('should throw an error if the array is falsey', () => {
      expect(() => calculateMissing(null).toThrow('Error: arr must be falsey'));
    });

    it('should throw an error if the array does not have 100 items.', () => {
      expect(() => calculateMissing([])).toThrow('Error: arr len must be positive');
    });
  });
});
