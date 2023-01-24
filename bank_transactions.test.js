const BankTransactions = require('./bank_transactions')

describe('BankTransactions class', () => {
  jest
    .useFakeTimers()
    .setSystemTime(new Date('Sun Jan 22 2023 16:52:20 GMT+0000 (Greenwich Mean Time)'))

  it('takes deposit input and returns array with single object', () => {
    const bankTransactions = new BankTransactions()
    bankTransactions.addTransaction(200, '')

    expect(bankTransactions.getTransactions()).toEqual([{ date: '22/01/2023', deposit: '200.00', withdrawal: '', balance: '200.00' }])
  })

  it('takes withdrawal input and returns array with single object', () => {
    const bankTransactions = new BankTransactions()
    bankTransactions.addTransaction('', 300)

    expect(bankTransactions.getTransactions()).toEqual([{ date: '22/01/2023', deposit: '', withdrawal: '300.00', balance: '-300.00' }])
  })

  it('takes multiple inputs and returns array with multiple Transactions in the correct order', () => {
    const bankTransactions = new BankTransactions()
    bankTransactions.addTransaction(400, '')
    bankTransactions.addTransaction(300, '')
    bankTransactions.addTransaction('', 100.50)

    expect(bankTransactions.getTransactions()).toEqual([{ date: '22/01/2023', deposit: '400.00', withdrawal: '', balance: '400.00' }, { date: '22/01/2023', deposit: '300.00', withdrawal: '', balance: '700.00' }, { date: '22/01/2023', deposit: '', withdrawal: '100.50', balance: '599.50' }].reverse())
  })
})
