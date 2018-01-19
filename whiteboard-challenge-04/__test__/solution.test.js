'use strict';

const solution = require('../lib/solution');

describe('Solution Modules', () => {
  describe('#findIntersections', () => {
    // valid data case
    it('should return back an array of the intersections', () => {
      let result;
      result = solution.findIntersections(['sue', 'sally', 'joe'], ['sue']);
      expect(result).toEqual(['sue']);
    });

    // failure cases
    it('should return an empty array if either (or both) of the arrays are empty', () => {
      let result;
      result = solution.findIntersections([], ['bob', 'rima']);
      expect(result).toEqual([]);
      result = solution.findIntersections(['bob', 'rima'], []);
      expect(result).toEqual([]);
      result = solution.findIntersections([], []);
      expect(result).toEqual([]);
    });

    it('should return an empty array if either (or both) of the passed arguments are not arrays themselves', () => {
      let result;
      result = solution.findIntersections(null, ['bob', 'rima']);
      expect(result).toEqual([]);
      result = solution.findIntersections(['bob', 'rima'], null);
      expect(result).toEqual([]);
      result = solution.findIntersections(null, undefined);
      expect(result).toEqual([]);
    });

    it('should return null if any non strings are present in either array argument', () => {
      let result;
      result = solution.findIntersections(['1'], [1]);
      expect(result).toEqual(null);
    });
  });
});
