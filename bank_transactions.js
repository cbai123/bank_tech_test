class BankTransactions {
  constructor () {
    this.balance = 0.00
    this.transactions = []
  }

  addTransaction (deposit, withdrawal) {
    this.balance += deposit
    this.balance -= withdrawal

    if (deposit !== '') {
      deposit = deposit.toFixed(2)
    } else if (withdrawal !== '') {
      withdrawal = withdrawal.toFixed(2)
    }

    this.transactions.unshift({ date: new Date().toLocaleDateString(), deposit, withdrawal, balance: this.balance.toFixed(2) })
  }

  getTransactions () {
    return this.transactions
  }
}

module.exports = BankTransactions
