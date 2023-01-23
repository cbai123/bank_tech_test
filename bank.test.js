const Bank = require('./bank')

describe('Bank class', () =>{
  
  jest
    .useFakeTimers()
    .setSystemTime(new Date('Sun Jan 22 2023 16:52:20 GMT+0000 (Greenwich Mean Time)'));

  it('can take a date and deposit and return the correct object', () =>{
    const bank = new Bank;

    expect(bank.deposit(100)).toEqual({date: '22/01/2023', deposit: 100, withdrawal: "", balance: 100});
  });

  it('can take a withdrawal and return the correct balance', () => {
    const bank = new Bank;

    expect(bank.withdraw(200)).toEqual({date: '22/01/2023', deposit: "", withdrawal: 200, balance: -200});
  });

  it('can take multiple deposits and withdrawals and return the correct balance', () => {
    const bank = new Bank;

    bank.deposit(200);
    bank.deposit(500);
    bank.withdraw(300);
    bank.deposit(200);
    bank.withdraw(400);
    expect(bank.deposit(100)).toEqual({date: '22/01/2023', deposit: 100, withdrawal: "", balance: 300});
  });
});