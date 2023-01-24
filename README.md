# Banking app to record deposits and withdrawals and view them with latest first

## Install:
Clone this repository by running:
```bash
git clone https://github.com/cbai123/bank_tech_test.git
```

Once cloned, change into the program directory and run:
```bash
npm install
```

## Testing:
To run the tests run:
```bash
jest
```

To run with coverage run:
```bash
jest --coverage
```

## Running the program:
Inside the project folder, open up node and import the bank.js file. Then create a new instance of the Bank class. You are then able to add deposits, withdrawals, and view your statement as you like.

<img width="592" alt="Screenshot 2023-01-24 at 11 00 14" src="https://user-images.githubusercontent.com/113935679/214275194-3fffe8aa-db7c-4013-9c85-acecfe09eaeb.png">


## Approach:
To start with I diagrammed on excalidraw how I would like the program to work. I started with the desired acceptance criteria and worked backwards into what logic that would require, and how it would be split up between classes. Initially I decided on 3 classes: Bank, BankTransactions, BankFormatter. Bank would handle updating and keeping track of the balance. BankTransactions would store the results from the Bank class in an array of objects. BankFormatter would take the array of objects from BankTransactions and format them into the desired output.

I then jumped into coding. I started with writing tests for the Bank class, and then wrote the code to pass these tests. Following this I test-drove the BankTransactions class, I didn't mock the Bank class interactions with it to start with, but I later redesigned the program and didn't need to. I then test-drove the BankFormatter class.

Following this I decided to rearrange the program to the current state, now the BankTransactions class would handle all the maths and store each transaction as an object in an array. The BankFormatter class stayed the same and the Bank class was used to join the other two classes. Bank receives input from the user, sends it to BankTransactions to store, and can then give the information from BankTransactions to BankFormatter to output. I updated the tests accordingly, BankTransactions and BankFormatter are unit tested, with Bank tests as the integration tests.

This resulted in the main bulk of the program being completed, I then focussed on refactoring the code, I setup ESLint to check code quality, checked test coverage, and added in 2 decimal places to the output.

## Code Structure:

I viewed the program as containing two parts to it. The maths half, the part that would handle the deposits and withdrawals, and keep track of the balance. And, the formatting half, this part would take the information from the maths half, format it to look good for the user, and then output it. I structured my code with the BankTransactions class handling the maths, BankFormatter class handled the the formatting, and the Bank class bridged the two.

Initially I had the deposit, withdrawal, and balance maths in a separate class to storing the data. I decided the maths was simple enough (just adding/subtracting to/from the balance) that it could be done in the same section as storing the user input. This meant the BankTransactions class could take the user input, update the balance, and store the initial input and the result in an object. The objects could be retrieved from this class in an array.

The Bank class takes the user input and gives it to the BankTransactions class. The user input is used to update the balance depending on deposit or withdrawal, this interaction is stored as an object in an array. When the user wants to view statement the Bank class retrieves the array from BankTransactions and gives it to the BankFormatter class, this takes the array and using a forEach loop formats it into the output desired.
