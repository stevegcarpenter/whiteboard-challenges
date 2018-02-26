'use strict';

const solution = require('../lib/solution');

describe('Solution Modules', () => {
  describe('#findIntersections', () => {
    // valid data case
    it('should return back an array of the intersections', () => {
      let result;
      result = solution.findIntersections([1, 2, 3, 4, 5], [2, 3]);
      expect(result).toEqual([2, 3]);
    });

    // failure cases
    it('should return an empty array if either (or both) of the arrays are empty', () => {
      let result;
      result = solution.findIntersections([], [1, 3]);
      expect(result).toEqual([]);
      result = solution.findIntersections([3, 7, 10], []);
      expect(result).toEqual([]);
      result = solution.findIntersections([], []);
      expect(result).toEqual([]);
    });

    it('should return an empty array if either (or both) of the passed arguments are not arrays themselves', () => {
      let result;
      result = solution.findIntersections(null, [19, 22]);
      expect(result).toEqual([]);
      result = solution.findIntersections([1, 7, 10], null);
      expect(result).toEqual([]);
      result = solution.findIntersections(null, undefined);
      expect(result).toEqual([]);
    });

    it('should return null if any non numbers are present in either array argument', () => {
      let result;
      result = solution.findIntersections(['1'], [1]);
      expect(result).toEqual(null);
    });
  });
});
