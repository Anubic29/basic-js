const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    if (type === undefined || type === true) {
      this.type = 'direct'
    } else if (type === false) {
      this.type = 'reverse'
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!')
    const arrMess = message.split('')
    let idxKey = 0
    const arrKey = key.toUpperCase().replace(/[^a-z]+/gi, '').split('')
    let res = []
    arrMess.forEach(elem => {
      if (elem.match(/[a-z]/gi) !== null) {
        let newLetter = elem.toUpperCase().charCodeAt(0) + (arrKey[idxKey++].charCodeAt(0) - 65)
        if (idxKey >= arrKey.length) idxKey -= arrKey.length
        while (newLetter > 90) newLetter -= 26
        res.push(String.fromCharCode(newLetter))
      } else {
        res.push(elem)
      }
    });
    return this.type === 'direct' ? res.join('') : res.reverse().join('')
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!')
    const arrMess = message.split('')
    let idxKey = 0
    const arrKey = key.toUpperCase().replace(/[^a-z]+/gi, '').split('')
    let res = []
    arrMess.forEach(elem => {
      if (elem.match(/[a-z]/gi) !== null) {
        let newLetter = elem.toUpperCase().charCodeAt(0) - (arrKey[idxKey++].charCodeAt(0) - 65)
        if (idxKey >= arrKey.length) idxKey -= arrKey.length
        while (newLetter < 65) newLetter += 26
        res.push(String.fromCharCode(newLetter))
      } else {
        res.push(elem)
      }
    });
    return this.type === 'direct' ? res.join('') : res.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
