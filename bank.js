class Bank {
  constructor() {
    this.balance = 0;
  }

  deposit(value) {
    this.balance += value;
  }

  withdraw(value) {
    this.balance -= value;
  }

  returnBalance() {
    return this.balance;
  }
}

module.exports = Bank;