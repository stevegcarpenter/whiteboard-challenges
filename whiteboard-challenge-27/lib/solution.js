'use strict';

// Rotate an NxN matrix
module.exports = matrix => {
  if (!matrix || !(matrix instanceof Array) || !matrix.length) throw new TypeError('matrix is invalid');

  let newMatrix = Array(matrix.length);

  for (let i in matrix) {
    if (!matrix[i] || !(matrix[i] instanceof Array) || matrix[i].length !== matrix.length) throw new TypeError(`matrix[${i}] is invalid`);
    for (let j in matrix[i]) {
      if (!newMatrix[j]) newMatrix[j] = Array(matrix.length);
      newMatrix[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }

  return newMatrix;
};
