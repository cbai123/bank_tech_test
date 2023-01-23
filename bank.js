class Bank {
  constructor() {
    this.balance = 0;
  }

  deposit(value) {
    this.balance += value;
    return {date: new Date().toLocaleDateString(), deposit: value, withdrawal: "", balance: this.balance}
  }

  withdraw(value) {
    this.balance -= value;
    return {date: new Date().toLocaleDateString(), deposit: "", withdrawal: value, balance: this.balance}
  }
}

module.exports = Bank;