const BankFormatter = require('./bank_formatter')
const TransactionHandler = require('./transactionHandler')

class BankInterface {
  constructor () {
    this.bankFormatter = new BankFormatter()
    this.transactionHandler = new TransactionHandler()
  }

  deposit (value) {
    this.transactionHandler.addTransaction(value, '')
  }

  withdraw (value) {
    this.transactionHandler.addTransaction('', value)
  }

  viewStatement () {
    this.bankFormatter.format(this.transactionHandler.getTransactions())
  }
}

module.exports = BankInterface
