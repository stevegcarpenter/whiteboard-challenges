'use strict';

const solution = require('../lib/solution');

describe('Solution Module', () => {
  describe('#checkBraces', () => {
    it('should return true if the input has no braces at all', () => {
      expect(solution.checkBraces('')).toBe(true);
      expect(solution.checkBraces('this technically has a perfect matching number of braces')).toBe(true);
    });
    it('should return true if their are the perfect number of braces.', () => {
      expect(solution.checkBraces('{ { { { {}{}}{}}}}')).toBe(true);
    });
    it('should return false if there are too many opening braces.', () => {
      expect(solution.checkBraces('{{{{{{{}')).toBe(false);
    });
    it('should return false if there are too many closing braces.', () => {
      expect(solution.checkBraces('{}}}}}}}}')).toBe(false);
    });
    it('should throw an error if the input argument is not a string.', () => {
      expect(() => solution.checkBraces(0)).toThrow('Ooops');
      expect(() => solution.checkBraces(1)).toThrow('Ooops');
      expect(() => solution.checkBraces({})).toThrow('Ooops');
      expect(() => solution.checkBraces(null)).toThrow('Ooops');
      expect(() => solution.checkBraces(undefined)).toThrow('Ooops');
      expect(() => solution.checkBraces(NaN)).toThrow('Ooops');
    });
  });
});
