'use strict';

const solution = require('../lib/solution');

describe('Solution Modules', () => {
  describe('#findIntersections', () => {
    // valid data case
    it('should return back an array of the intersections', () => {
      let result;
      result = solution.findIntersections([1, 2, 3], [1]);
      expect(result).toEqual([1]);
      result = solution.findIntersections([45, 27, -14], [1, 2, 3, 4, 5, 6, 7, -14]);
      expect(result).toEqual([-14]);
    });

    // failure cases
    it('should return an empty array if either (or both) of the arrays are empty', () => {
      let result;
      result = solution.findIntersections([], [1, 2]);
      expect(result).toEqual([]);
      result = solution.findIntersections([1, 2], []);
      expect(result).toEqual([]);
      result = solution.findIntersections([], []);
      expect(result).toEqual([]);
    });

    it('should return an empty array if either (or both) of the passed arguments are not arrays themselves', () => {
      let result;
      result = solution.findIntersections(null, [1, 2, 3]);
      expect(result).toEqual([]);
      result = solution.findIntersections([1, 2, 3], null);
      expect(result).toEqual([]);
      result = solution.findIntersections(null, undefined);
      expect(result).toEqual([]);
    });
  });
});
