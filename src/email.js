const hash = process.env.HASH_CODE
const number = [0, 1]

class EmailFounder {
  constructor() {
  
  }

  addDot(str, index, stringToAdd){
    return str.substring(0, index).concat(stringToAdd).concat(str.substring(index, str.length))
  }

  decryptEmail(num) {
    let positionNumber = this.createArrayNumbersPositions(num)
    let emailArray = hash.split('')
    let email = ''
    for (const it of positionNumber) {
      email = email.concat(emailArray[it])
    }
    email = this.addDot(email, 5, '.')
    
    return this.normalizeEmail(email)
  }

  createArrayNumbersPositions(n) {
    return Array.from({ length: n }).reduce(
      (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
      []
    ).slice(2)
  }

  normalizeEmail(email) {
    return String(email).toLocaleLowerCase()
  }
}

module.exports = new EmailFounder()