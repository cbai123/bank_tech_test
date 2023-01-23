const BankTransactions = require('./bank_transactions')

describe('BankTransactions class', () => {
  jest
    .useFakeTimers()
    .setSystemTime(new Date('Sun Jan 22 2023 16:52:20 GMT+0000 (Greenwich Mean Time)'))

  it('takes input of date and deposit and returns array with single object', () => {
    const bankTransactions = new BankTransactions()
    bankTransactions.addTransaction(200, '')

    expect(bankTransactions.getTransactions()).toEqual([{ date: '22/01/2023', deposit: '200.00', withdrawal: '', balance: '200.00' }])
  })

  it('takes input of date and withdrawal and returns array with single object', () => {
    const bankTransactions = new BankTransactions()
    bankTransactions.addTransaction('', 300)

    expect(bankTransactions.getTransactions()).toEqual([{ date: '22/01/2023', deposit: '', withdrawal: '300.00', balance: '-300.00' }])
  })

  it('takes multiple inputs and returns array with multiple Transactions', () => {
    const bankTransactions = new BankTransactions()
    bankTransactions.addTransaction(400, '')
    bankTransactions.addTransaction(300, '')
    bankTransactions.addTransaction('', 100)

    expect(bankTransactions.getTransactions()).toEqual([{ date: '22/01/2023', deposit: '400.00', withdrawal: '', balance: '400.00' }, { date: '22/01/2023', deposit: '300.00', withdrawal: '', balance: '700.00' }, { date: '22/01/2023', deposit: '', withdrawal: '100.00', balance: '600.00' }].reverse())
  })
})
