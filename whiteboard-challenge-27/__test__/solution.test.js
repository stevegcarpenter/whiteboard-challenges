'use strict';

const rotateMatrix = require('../lib/solution');

describe('Solution Module', () => {
  describe('Valid', () => {
    it('should properly rotate the matrix 90 degrees.', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const rotMatrix = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ];
      const newMatrix = rotateMatrix(matrix);
      console.log(JSON.stringify(newMatrix));
      expect(newMatrix).toEqual(rotMatrix);
    });
  });

  describe('Invalid', () => {
    it('should recognize an empty matrix and throw an error', () => {
      const emptyMatrix = [];
      expect(() => rotateMatrix(emptyMatrix)).toThrow('matrix is invalid');
    });

    it('should recognize a matrix that is not NxN and throw an error', () => {
      const invalidLenMatrix = [
        [1],
        [2, 3],
      ];
      expect(() => rotateMatrix(invalidLenMatrix)).toThrow('matrix[0] is invalid');
    });

    it('should recognize a matrix with a bad row and throw an error', () => {
      const invalidItemMatrix = [
        [1, 2, 3],
        null,
        [7, 8, 9],
      ];
      expect(() => rotateMatrix(invalidItemMatrix)).toThrow('matrix[1] is invalid');
    });
  });
});
