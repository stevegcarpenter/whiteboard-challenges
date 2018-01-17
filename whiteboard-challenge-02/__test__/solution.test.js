'use strict';

const solution = require('../lib/solution');

describe('Solution Module', () => {
  describe('#maxAndNextMax', () => {
    it('should return the max and next highest max values', () => {
      expect(solution.maxAndNextMax([1, 2, 3])).toEqual({'max': 3, 'nextmax': 2});
      expect(solution.maxAndNextMax([0, 101, 10, 20, 87])).toEqual({'max': 101, 'nextmax': 87});
    });

    it('should accept and handle negative numbers, zero, and positive numbers', () => {
      expect(solution.maxAndNextMax([-100, -10, -15, -50])).toEqual({'max': -10, 'nextmax': -15});
      expect(solution.maxAndNextMax([100, 0, -15, -50 ,-5])).toEqual({'max': 100, 'nextmax': 0});
    });

    it('should accept and process all floats or some floats as well as integers', () => {
      expect(solution.maxAndNextMax([1.25, 10.5, 31.77])).toEqual({'max': 31.77, 'nextmax': 10.5});
      expect(solution.maxAndNextMax([1, 10, 8.5, 2.12])).toEqual({'max': 10, 'nextmax': 8.5});
    });

    it('should return null in the event that fewer then two arguments are provided', () => {
      expect(solution.maxAndNextMax([1])).toEqual(null);
      expect(solution.maxAndNextMax([])).toEqual(null);
    });

    it('should return null in the event that the numbers arg is not an Array', () => {
      expect(solution.maxAndNextMax(1)).toEqual(null);
      expect(solution.maxAndNextMax(0)).toEqual(null);
      expect(solution.maxAndNextMax('')).toEqual(null);
      expect(solution.maxAndNextMax('foo')).toEqual(null);
      expect(solution.maxAndNextMax({})).toEqual(null);
      expect(solution.maxAndNextMax(null)).toEqual(null);
      expect(solution.maxAndNextMax(undefined)).toEqual(null);
    });

    it('should return null in the event 1 or more items in the numbers array is a non number', () => {
      expect(solution.maxAndNextMax([0, 101, 'steve is great', 20, 87])).toEqual(null);
      expect(solution.maxAndNextMax(['', 101, 'steve is great', 20, 87])).toEqual(null);
      expect(solution.maxAndNextMax([{}, 1.4, 101, 'steve is great', 20, null])).toEqual(null);
      expect(solution.maxAndNextMax(['steve is great', '', 'foo'])).toEqual(null);
    });
  });
});
