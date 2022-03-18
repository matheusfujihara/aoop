require('dotenv').config()

let Email = require('./src/email.js')

let email = Email.decryptEmail(12)
console.log(`the email founded is ${email}@aoop.com.br`)