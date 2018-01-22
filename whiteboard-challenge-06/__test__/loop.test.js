'use strict';

const loop = require('../lib/loop');

describe('Solution Module', () => {
  describe('#loop', () => {
    // valid data case
    it('should run and increment a variable count times', () => {
      let x = 0;
      loop(10, () => x++);
      expect(x).toBe(10);
    });

    // invalid data cases
    it('should not recurse or run the callback at all if the count is less then zero', () => {
      let x = 0;
      loop(-100, () => x++);
      expect(x).toBe(0);
    });

    it('should not recurse or run the callback if the count arg is not a number', () => {
      let x = 0;
      loop('100', () => x++);
      expect(x).toBe(0);
    });
  });
});

