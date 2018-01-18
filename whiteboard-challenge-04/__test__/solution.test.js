'use strict';

const solution = require('../lib/solution');

describe('Solution Modules', () => {
  describe('#findIntersections', () => {
    it('should return back an array of the intersections', () => {
      let result = solution.findIntersections([1, 2, 3], [1]);
      expect(result).toEqual([1]);
    });
  });
});
