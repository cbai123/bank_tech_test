const BankFormatter = require('./bank_formatter')
const BankTransactions = require('./bank_transactions')

class Bank {
  constructor () {
    this.bankFormatter = new BankFormatter()
    this.bankTransactions = new BankTransactions()
  }

  deposit (value) {
    this.bankTransactions.addTransaction(value.toFixed(2), '')
  }

  withdraw (value) {
    this.bankTransactions.addTransaction('', value.toFixed(2))
  }

  viewStatement () {
    this.bankFormatter.format(this.bankTransactions.getTransactions())
  }
}

module.exports = Bank
