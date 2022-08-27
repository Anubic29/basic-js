const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = matrix[0].reduce((sum, elem) => sum + elem, 0)
  for (let idx = 1; idx < matrix.length; idx++) {
    matrix[idx].forEach((elem, index) => {
      if (matrix[idx - 1][index] !== 0) {
        result += elem
      }
    })    
  }
  return result
}

module.exports = {
  getMatrixElementsSum
};
