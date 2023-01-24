## Read Me
## Banking app to record deposits and withdrawals and view them with latest first

# Install:
Clone this repository by running:
```bash
git clone https://github.com/cbai123/bank_tech_test.git
```

Once cloned, run:
```bash
npm install
```

# Testing:
To run the tests run:
```bash
jest
```

To run with coverage run:
```bash
jest --coverage
```

# Running the program
Inside the project folder, open up node and import the bank.js file. Then create a new instance of the Bank class. You are then able to add deposits, withdrawals, and view your statement as you like.

``` bash
node

const Bank = require('./bank.js')

const bank = new Bank()

bank.deposit(100.30)

bank.withdraw(40)

bank.viewStatement()
```
