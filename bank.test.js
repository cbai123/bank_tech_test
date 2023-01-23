const Bank = require('./bank')

describe('Bank class', () => {
  jest
    .useFakeTimers()
    .setSystemTime(new Date('Sun Jan 22 2023 16:52:20 GMT+0000 (Greenwich Mean Time)'))

  let logSpy
  beforeEach(() => {
    logSpy = jest.spyOn(global.console, 'log')
  })

  afterEach(() => {
    logSpy.mockRestore()
  })

  it('accepts a deposit and gives the correct statement', () => {
    const bank = new Bank()

    bank.deposit(100)
    bank.viewStatement()

    expect(logSpy).toHaveBeenCalled()
    expect(logSpy).toHaveBeenCalledTimes(2)
    expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance')
    expect(logSpy.mock.calls).toContainEqual(['22/01/2023 || 100.00 ||  || 100.00'])
  })

  it('accepts a withdrawal and gives the correct statement', () => {
    const bank = new Bank()

    bank.withdraw(100)
    bank.viewStatement()

    expect(logSpy).toHaveBeenCalled()
    expect(logSpy).toHaveBeenCalledTimes(2)
    expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance')
    expect(logSpy.mock.calls).toContainEqual(['22/01/2023 ||  || 100.00 || -100.00'])
  })

  it('accepts multiple deposits and withdrawals and gives the correct statement', () => {
    const bank = new Bank()

    bank.deposit(100)
    bank.deposit(200)
    bank.withdraw(150)
    bank.deposit(1000.50)
    bank.withdraw(500)
    bank.withdraw(350)
    bank.viewStatement()

    expect(logSpy).toHaveBeenCalled()
    expect(logSpy).toHaveBeenCalledTimes(7)
    expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance')
    expect(logSpy.mock.calls).toContainEqual(['22/01/2023 || 100.00 ||  || 100.00'])
    expect(logSpy.mock.calls).toContainEqual(['22/01/2023 || 200.00 ||  || 300.00'])
    expect(logSpy.mock.calls).toContainEqual(['22/01/2023 ||  || 150.00 || 150.00'])
    expect(logSpy.mock.calls).toContainEqual(['22/01/2023 || 1000.50 ||  || 1150.50'])
    expect(logSpy.mock.calls).toContainEqual(['22/01/2023 ||  || 500.00 || 650.50'])
    expect(logSpy.mock.calls).toContainEqual(['22/01/2023 ||  || 350.00 || 300.50'])
  })
})
