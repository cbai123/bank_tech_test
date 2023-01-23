class BankTransactions {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  addTransaction(deposit, withdrawal) {
      this.balance += deposit;
      this.balance -= withdrawal;
      this.transactions.unshift({date: new Date().toLocaleDateString(), deposit: deposit, withdrawal: withdrawal, balance: this.balance})
  }

  getTransactions() {
    return this.transactions;
  }
}

module.exports = BankTransactions;