'use strict';

const solution = require('../lib/solution');

describe('Solution Module', () => {
  describe('#checkBraces', () => {
    it('should return true if the input has no braces at all', () => {
      expect(solution.checkBraces('')).toBe(true);
      expect(solution.checkBraces('this technically has a perfect matching number of braces')).toBe(true);
    });

    it('should return true if their are the perfect number of braces.', () => {
      expect(solution.checkBraces('{ { { { {}{}}{}}}}')).toBe(true);
    });

    it('should return false if there are too many opening braces.', () => {
      expect(solution.checkBraces('{{{{{{{}')).toBe(false);
    });

    it('should return false if there are too many closing braces.', () => {
      expect(solution.checkBraces('{}}}}}}}}')).toBe(false);
    });

    it('should throw an error if the input argument is not a string.', () => {
      expect(() => solution.checkBraces(0)).toThrow('Ooops');
      expect(() => solution.checkBraces(1)).toThrow('Ooops');
      expect(() => solution.checkBraces({})).toThrow('Ooops');
      expect(() => solution.checkBraces(null)).toThrow('Ooops');
      expect(() => solution.checkBraces(undefined)).toThrow('Ooops');
      expect(() => solution.checkBraces(NaN)).toThrow('Ooops');
    });
  });

  describe('#binarySearch', () => {
    it('should return the correct index and value in an object when found', () => {
      expect(solution.binarySearch([1, 3, 5], 5)).toEqual({value: 5, index: 2});
      expect(solution.binarySearch([1, 3, 7, 10, 15, 25], 25)).toEqual({value: 25, index: 5});
      expect(solution.binarySearch([1, 3, 5, 7, 10, 11, 14, 15, 25, 100], 1)).toEqual({value: 1, index: 0});
      expect(solution.binarySearch([-2, 1, 3, 5, 7, 9, 10, 11, 14, 15, 25, 100], 7)).toEqual({value: 7, index: 4});
    });

    it('should throw an error if the sorted array is not an instance of an Array', () => {
      expect(() => solution.binarySearch({}, 10)).toThrow('Ooops');
    });

    it('should throw an error if `n` is not of type number', () => {
      expect(() => solution.binarySearch([1, 2, 3, 4], 'foo')).toThrow('Ooops');
    });

    it('should return null if the `n` value is not found', () => {
      expect(solution.binarySearch([1, 3, 5], 4)).toEqual(null);
    });
  });
});
