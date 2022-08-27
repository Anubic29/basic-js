const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let res = 1
    const filtered = arr.filter(elem => Array.isArray(elem))
    if (filtered.length > 0) {
      const calculated = filtered.map(elem => this.calculateDepth(elem))
      res += Math.max(...calculated)
    }
    return res
  }
}

module.exports = {
  DepthCalculator
};
