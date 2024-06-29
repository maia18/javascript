// Superckass
function Account(agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}
Account.prototype.withdraw = function(value) {
    if (value > this.balance) {
        console.log(`Balance insufficient: R$${(this.balance).toFixed(2)}`);
        return;
    }
    this.balance -= value;
    this.seeBalance();
};
Account.prototype.deposit = function(value) {
    this.balance += value;
    this.seeBalance();
};
Account.prototype.seeBalance = function() {
    console.log(
        `Ag/c: ${this.agency}/${this.account} | ` +
        `Balance: R$${this.balance.toFixed(2)}`
    );
};

// Subclass
function CheckingAccount(agency, account, balance, limit) {
     Account.call(this, agency, account, balance);
     this.limit = limit;
}
CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.withdraw = function(value) {
    if (value > (this.balance + this.limiit)) {
        console.log(`Balance insufficient: R$${(this.balance).toFixed(2)}`);
        return;
    }
    this.balance -= value;
    this.seeBalance();
};

// Subclass
function SavingsAccount(agency, account, balance) {
    Account.call(this, agency, account, balance);
}
SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

const ca = new CheckingAccount(11, 22, 0, 100);
ca.deposit(10);
ca.withdraw(110);

const sa = new SavingsAccount(12, 33, 0);
sa.deposit(10);
sa.withdraw(110);
sa.withdraw(1);