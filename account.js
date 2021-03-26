class Account {
  constructor(_accountBalance) {
    this.accountBalance = _accountBalance;
  }

  withdraw(amount) {
    const pin = 1234;
    const userInput = prompt("Enter your card pin");
    if (pin === parseInt(userInput)) {
      this.accountBalance -= amount;
      // console.log("Your balance is", this.accountBalance);
    } else {
      console.log("Incorrect pin");
    }
  }
  deposit(amount) {
    this.accountBalance += amount;
    console.log("Deposit successfull");
  }
  checkBalance() {
    console.log("Your balance is", this.accountBalance);
  }
}

const res = new Account(10000);
res.withdraw(2000);
res.checkBalance();
res.deposit(5000);
res.checkBalance();
