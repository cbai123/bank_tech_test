const BankInterface = require('./bankInterface')

describe('BankInterface class', () => {
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
    const bankInterface = new BankInterface()

    bankInterface.deposit(100)
    bankInterface.viewStatement()

    expect(logSpy).toHaveBeenCalled()
    expect(logSpy).toHaveBeenCalledTimes(2)
    expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance')
    expect(logSpy.mock.calls).toContainEqual(['22/01/2023 || 100.00 ||  || 100.00'])
  })

  it('accepts a withdrawal and gives the correct statement', () => {
    const bankInterface = new BankInterface()

    bankInterface.withdraw(100)
    bankInterface.viewStatement()

    expect(logSpy).toHaveBeenCalled()
    expect(logSpy).toHaveBeenCalledTimes(2)
    expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance')
    expect(logSpy.mock.calls).toContainEqual(['22/01/2023 ||  || 100.00 || -100.00'])
  })

  it('accepts multiple deposits and withdrawals and gives the correct statement', () => {
    const bankInterface = new BankInterface()

    bankInterface.deposit(100)
    bankInterface.deposit(200)
    bankInterface.withdraw(150)
    bankInterface.deposit(1000.50)
    bankInterface.withdraw(500)
    bankInterface.withdraw(350)
    bankInterface.viewStatement()

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
