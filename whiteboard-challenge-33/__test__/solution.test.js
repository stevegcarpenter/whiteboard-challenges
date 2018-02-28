'use strict';

const addExp = require('../lib/solution');

describe('Solution Module', () => {
  describe('#addExp', () => {
    describe('Valid', () => {
      it('should return the exponent digits added together', () => {
        expect(addExp(2, 2)).toEqual(4);
        expect(addExp(2, 3)).toEqual(8);
        expect(addExp(2, 4)).toEqual(7);
        expect(addExp(2, 5)).toEqual(5);
        expect(addExp(2, 6)).toEqual(10);
        expect(addExp(2, 7)).toEqual(11);
      });
    });

    describe('Invalid', () => {
      it('should detect a non-number base value and throw an Error', () => {
        expect(() => addExp('', 10)).toThrow('invalid base type: must be number');
      });

      it('should detect a non-number exp value and throw an Error', () => {
        expect(() => addExp(10, '')).toThrow('invalid exp type: must be number');
      });

      it('should detect a negative base number and throw an Error', () => {
        expect(() => addExp(-1, 4)).toThrow('base must be positive');
      });
    });
  });
});
