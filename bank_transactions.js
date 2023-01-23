const Bank = require("./bank");

class BankTransactions {
  constructor() {
    this.transactions = [];
    this.bank = new Bank;
  }

  addInteraction(deposit, withdrawal) {
    if (deposit != 0) {
      this.transactions.unshift(this.bank.deposit(deposit));
    } else if (withdrawal != 0) {
      this.transactions.unshift(this.bank.withdraw(withdrawal));
    } else {
      return ('No deposit or withdrawal')
    }
  }

  getTransactions() {
    return this.transactions;
  }
}

module.exports = BankTransactions;