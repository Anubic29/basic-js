const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const addition = options.addition !== undefined ? options.addition + '' : ''
  const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|'
  let additionStr = Array(options.additionRepeatTimes).fill(addition).join(additionSeparator)

  const separator = options.separator !== undefined ? options.separator : '+'
  let res = Array(options.repeatTimes).fill(str + additionStr).join(separator)

  return res
}

module.exports = {
  repeater
};
