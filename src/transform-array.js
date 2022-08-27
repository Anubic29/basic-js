const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  const res = []
  arr.forEach((elem, idx) => {
    if (typeof elem === 'string' && elem.match(/^--(discard|double)-(prev|next)/) !== null) {
      let [task, way] = elem.replace(/-/gi, ' ').trim().split(' ')
      if (task === 'double') {
        if (way === 'prev') res.push(res[res.length - 1])
        else res.push(arr[idx + 1])
      } else {
        if (way === 'prev') res[res.length - 1] = null
        else arr[idx + 1] = null
      }
    } else {
      res.push(elem)
    }
  })
  return res.filter(elem => !!elem)
}

module.exports = {
  transform
};
