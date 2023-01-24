const BankFormatter = require('./bank_formatter')

describe('BankFormatter class', () => {
  let logSpy

  beforeEach(() => {
    logSpy = jest.spyOn(global.console, 'log')
  })

  afterEach(() => {
    logSpy.mockRestore()
  })

  it('accepts an array of one bank object and formats it correctly', () => {
    const bankFormatter = new BankFormatter()
    bankFormatter.format([{ date: '14/01/2023', deposit: 100, withdrawal: '', balance: 150 }])

    expect(logSpy).toHaveBeenCalled()
    expect(logSpy).toHaveBeenCalledTimes(2)
    expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance')
    expect(logSpy.mock.calls).toContainEqual(['14/01/2023 || 100 ||  || 150'])
  })

  it('accepts an array of multiple bank objects and formats it correctly', () => {
    const bankFormatter = new BankFormatter()

    bankFormatter.format([{ date: '16/01/2023', deposit: 100.25, withdrawal: '', balance: 250.25 }, { date: '15/01/2023', deposit: '', withdrawal: 50, balance: 150 }, { date: '14/01/2023', deposit: 200, withdrawal: '', balance: 200 }])

    expect(logSpy).toHaveBeenCalled()
    expect(logSpy).toHaveBeenCalledTimes(4)
    expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance')
    expect(logSpy.mock.calls).toContainEqual(['16/01/2023 || 100.25 ||  || 250.25'])
    expect(logSpy.mock.calls).toContainEqual(['15/01/2023 ||  || 50 || 150'])
    expect(logSpy.mock.calls).toContainEqual(['14/01/2023 || 200 ||  || 200'])
  })
})
