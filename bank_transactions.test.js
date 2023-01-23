const BankTransactions = require('./bank_transactions');

describe('BankTransactions class', () => {

  jest
    .useFakeTimers()
    .setSystemTime(new Date('Sun Jan 22 2023 16:52:20 GMT+0000 (Greenwich Mean Time)'));

  it('takes input of date and deposit and returns array with single object', () => {
    const bankTransactions = new BankTransactions;
    bankTransactions.addTransaction(200, 0);

    expect(bankTransactions.getTransactions()).toEqual([{date: '22/01/2023', deposit: 200, withdrawal: "", balance: 200}]);
  });

  it('takes input of date and withdrawal and returns array with single object', () => {
    const bankTransactions = new BankTransactions;
    bankTransactions.addTransaction(0, 300);

    expect(bankTransactions.getTransactions()).toEqual([{date: '22/01/2023', deposit: "", withdrawal: 300, balance: -300}])
  });

  it('takes multiple inputs and returns array with multiple Transactions', () => {
    const bankTransactions = new BankTransactions;
    bankTransactions.addTransaction(400, 0);
    bankTransactions.addTransaction(300, 0);
    bankTransactions.addTransaction(0, 100);

    expect(bankTransactions.getTransactions()).toEqual([{date: '22/01/2023', deposit: 400, withdrawal: "", balance: 400}, {date: '22/01/2023', deposit: 300, withdrawal: "", balance: 700}, {date: '22/01/2023', deposit: "", withdrawal: 100, balance: 600}].reverse())
  })

  it('returns error message if no deposit or withdrawal given', () => {
    const bankTransactions = new BankTransactions;
    expect(bankTransactions.addTransaction(0, 0)).toBe('No deposit or withdrawal')
  });
})