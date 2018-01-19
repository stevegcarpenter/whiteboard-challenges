'use strict';

const solution = require('../lib/solution');

describe('Solution Module', () => {
  describe('#findIntersections', () => {
    let validList = {
      'value': 1,
      'next': {
        'value': 2,
        'next': {
          'value': 3,
          'next': {
            'value': 4,
            'next': null,
          },
        },
      },
    };

    // valid data case
    it('should return back the middle node of a link list given the head', () => {
      expect(solution.findMiddleNode(validList).value).toEqual(2);
    });
  });
});
