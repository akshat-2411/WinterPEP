// Simulates basic banking operations such as creating an account, depositing money,
// and withdrawing money using functions using javascript.

// Bank Account Constructor
function BankAccount(accountHolder, initialDeposit = 0) {
    this.accountHolder = accountHolder;
    this.balance = initialDeposit;

    // Method to deposit money
    this.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`₹${amount} deposited. New balance: ₹${this.balance}`);
        } else {
            console.log("Deposit amount must be greater than zero.");
        }
    };

    // Method to withdraw money
    this.withdraw = function (amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`₹${amount} withdrawn. Remaining balance: ₹${this.balance}`);
            } else {
                console.log("Insufficient funds.");
            }
        } else {
            console.log("Withdrawal amount must be greater than zero.");
        }
    };

    // Method to check balance
    this.checkBalance = function () {
        console.log(`Account holder: ${this.accountHolder}, Balance: ₹${this.balance}`);
    };
}

// Create an account
const myAccount = new BankAccount("Akshat", 25000);

// Perform operations
myAccount.checkBalance();
myAccount.deposit(2000);
myAccount.withdraw(1500);
myAccount.checkBalance();
