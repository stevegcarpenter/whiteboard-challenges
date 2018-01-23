'use strict';

const isCircular = require('../lib/solution');

describe('Solution Module', () => {
  describe('#isCircular', () => {
    it('should return false if the head reference is falsey', () => {
      expect(() => isCircular(null)).toThrow('Ooops');
    });

    it('should return false if the list is not circular', () => {
      let normalList = {
        value: 0,
        next: {
          value: 1,
          next: {
            value: 2,
            next: {
              value: 3,
              next: null,
            },
          },
        },
      };

      expect(isCircular(normalList)).toBe(false);
    });

    it('should return true if the list is circular', () => {
      let circularList = {
        value: 0,
        next: {
          value: 1,
          next: {
            value: 2,
            next: null,
          },
        },
      };
      circularList.next.next.next = circularList;

      expect(isCircular(circularList)).toBe(true);
    });

    it('should return true even when the link list circles back on a node somewhere in the middle', () => {
      let circularList = {
        value: 0,
        next: {
          value: 1,
          next: {
            value: 2,
            next: null,
          },
        },
      };
      circularList.next.next.next = circularList.next;

      expect(isCircular(circularList)).toBe(true);
    });

    it('should be able to detect a single item circular link list', () => {
      let circularList = {
        value: 0,
        next: null,
      };
      circularList.next = circularList;

      expect(isCircular(circularList)).toBe(true);
    });
  });
});
