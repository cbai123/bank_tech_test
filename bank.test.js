const Bank = require('./bank')

describe('Bank class', () =>{
  
  jest
    .useFakeTimers()
    .setSystemTime(new Date('Sun Jan 22 2023 16:52:20 GMT+0000 (Greenwich Mean Time)'));

  let logSpy;
    beforeEach(() => {
      logSpy = jest.spyOn(global.console, 'log')
    });

    afterEach(() => {
      logSpy.mockRestore();
    });

    it('accepts a deposit and gives the correct statement', () => {
      const bank = new Bank;

      bank.deposit(100);
      bank.viewStatement();

      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(2);
      expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance');
      expect(logSpy.mock.calls).toContainEqual(['22/01/2023 || 100 ||  || 100']);
    });

    it('accepts a withdrawal and gives the correct statement', () => {
      const bank = new Bank;

      bank.withdraw(100);
      bank.viewStatement();

      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(2);
      expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance');
      expect(logSpy.mock.calls).toContainEqual(['22/01/2023 ||  || 100 || -100']);
    });

    it('accepts multiple deposits and withdrawals and gives the correct statement', () => {
      const bank = new Bank;

      bank.deposit(100);
      bank.deposit(200);
      bank.withdraw(150);
      bank.deposit(1000);
      bank.withdraw(500);
      bank.withdraw(350);
      bank.viewStatement();

      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(7);
      expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance');
      expect(logSpy.mock.calls).toContainEqual(['22/01/2023 || 100 ||  || 100']);
      expect(logSpy.mock.calls).toContainEqual(['22/01/2023 || 200 ||  || 300']);
      expect(logSpy.mock.calls).toContainEqual(['22/01/2023 ||  || 150 || 150']);
      expect(logSpy.mock.calls).toContainEqual(['22/01/2023 || 1000 ||  || 1150']);
      expect(logSpy.mock.calls).toContainEqual(['22/01/2023 ||  || 500 || 650']);
      expect(logSpy.mock.calls).toContainEqual(['22/01/2023 ||  || 350 || 300']);
    });
});