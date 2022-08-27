const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortableArr = []
  const result = arr.map(value => {
    if (value !== -1) {
      sortableArr.push(value)
      return 'insert'
    }
    return value
  })
  sortableArr.sort((a, b) => a - b)
  return result.map(value => {
    if (value === 'insert') {
      return sortableArr.shift()
    }
    return value
  })
}

module.exports = {
  sortByHeight
};
