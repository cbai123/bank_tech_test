const BankFormatter = require("./bank_formatter");
const BankTransactions = require("./bank_transactions");


class Bank {
  constructor() {
    this.bankFormatter = new BankFormatter;
    this.bankTransactions = new BankTransactions;
  }

  deposit(value) {
    this.bankTransactions.addTransaction(value, 0);
  }

  withdraw(value) {
    this.bankTransactions.addTransaction(0, value);
  }

  viewStatement() {
    this.bankFormatter(this.bankTransactions.getTransactions())
  }
}

module.exports = Bank;