const BankFormatter = require("./bank_formatter");
const BankTransactions = require("./bank_transactions");


class Bank {
  constructor() {
    this.bankFormatter = new BankFormatter;
    this.bankTransactions = new BankTransactions;
  }

  deposit(value) {
    this.bankTransactions.addTransaction(value, "");
  }

  withdraw(value) {
    this.bankTransactions.addTransaction("", value);
  }

  viewStatement() {
    this.bankFormatter.format(this.bankTransactions.getTransactions())
  }
}

module.exports = Bank;