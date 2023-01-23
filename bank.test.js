const Bank = require('./bank')

describe('Bank class', () =>{
  
  let bank;
  beforeEach(() => {
    bank = new Bank;
  })

  it('can take a deposit and return the correct balance', () =>{
    // const bank = new Bank;
    bank.deposit(100);
    expect(bank.returnBalance()).toBe(100);
  });

  it('can take a withdrawal and return the correct balance', () => {
    // const bank = new Bank;
    bank.withdraw(100);
    expect(bank.returnBalance()).toBe(-100);
  });

  it('can take multiple deposits and withdrawals and return the correct balance', () => {
    bank.deposit(200);
    bank.deposit(500);
    bank.withdraw(300);
    bank.deposit(200);
    bank.withdraw(400);
    expect(bank.returnBalance()).toBe(200);
  })
});