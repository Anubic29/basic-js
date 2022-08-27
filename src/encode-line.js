const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('')
  array.push('')
  let lastLetter = ''
  let countLetter = 1
  let result = ''
  array.forEach(letter => {
    if (letter !== lastLetter) {
      result += countLetter > 1 ? countLetter + lastLetter : lastLetter
      lastLetter = letter
      countLetter = 1
    } else {
      countLetter++
    }
  })
  return result
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
