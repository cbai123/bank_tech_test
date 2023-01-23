class BankFormatter {
  format(array) {
    console.log('date || credit || debit || balance');
    array.forEach(object => {
    console.log(`${object.date} || ${object.deposit} || ${object.withdrawal} || ${object.balance}`);
    })
  }
}

module.exports = BankFormatter;