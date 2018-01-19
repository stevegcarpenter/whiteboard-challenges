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

    let invalidListA = {
      'value': 1,
      'next': {
        'value': 2,
        'next': {
          'invalid-property': 3,
          'next': {
            'value': 4,
            'next': null,
          },
        },
      },
    };

    let invalidListB = {
      'value': 1,
      'next': {
        'value': 2,
        'next': {
          'value': 3,
          'value2': 'Yay!',
          'value3': 'Too many values!',
          'next': {
            'value': 4,
            'next': null,
          },
        },
      },
    };

    let invalidListC = {
      'value': 1,
      'next': 'this should not be a string, but it is',
    };

    // valid data case
    it('should return back the middle node of a link list given the head', () => {
      expect(solution.findMiddleNode(validList).value).toEqual(2);
    });

    // failure tests
    it('should return null if any of the nodes has an invalid property', () => {
      expect(solution.findMiddleNode(invalidListA)).toEqual(null);
      expect(solution.findMiddleNode(invalidListB)).toEqual(null);
      expect(solution.findMiddleNode(invalidListC)).toEqual(null);
    });

    it('should return back the middle node of a link list given the head', () => {
      expect(solution.findMiddleNode(null)).toEqual(null);

    });
  });
});
