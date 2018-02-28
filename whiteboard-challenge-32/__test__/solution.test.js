'use strict';

const solution = require('../lib/solution');

describe('Solution Modules', () => {
  describe('#fibR', () => {
    describe('Valid', () => {
      it('should return the correct Fibonacci number for both base cases', () => {
        expect(solution.fibR(0)).toEqual(0);
        expect(solution.fibR(1)).toEqual(1);
      });

      it('should return the correct Fibonacci number for non-base cases', () => {
        expect(solution.fibR(9)).toEqual(34);
      });
    });

    describe('Invalid', () => {
      it('should detect a non-number being passed in and throw an Error', () => {
        expect(() => solution.fibR([])).toThrow('invalid n value');
      });

      it('should detect a negative number and throw an Error', () => {
        expect(() => solution.fibR(-10)).toThrow('invalid n value');
      });
    });
  });


  describe('#fibI', () => {
    describe('Valid', () => {
      it('should return the correct Fibonacci number for both base cases', () => {
        expect(solution.fibI(0)).toEqual(0);
        expect(solution.fibI(1)).toEqual(1);
      });

      it('should return the correct Fibonacci number for non-base cases', () => {
        expect(solution.fibI(9)).toEqual(34);
      });
    });

    describe('Invalid', () => {
      it('should detect a non-number being passed in and throw an Error', () => {
        expect(() => solution.fibI([])).toThrow('invalid n value');
      });

      it('should detect a negative number and throw an Error', () => {
        expect(() => solution.fibI(-10)).toThrow('invalid n value');
      });
    });
  });
});
