const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const recycledDomains = domains.map(domain => domain.split('.').reverse())
  const result = {}
  recycledDomains.forEach(domain => {
    domain.reduce((main, elem) => {
      const key = main + `.${elem}`
      if (result[key] === undefined) result[key] = 0
      result[key] += 1
      return key
    }, '')
  })
  return result
}

module.exports = {
  getDNSStats
};
