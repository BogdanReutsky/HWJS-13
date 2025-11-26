const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const account = {
  balance: 0,


  transactions: [],
  Id: 1,
  createTransaction(amount, type) {
    const transaction = {
        amount: amount,
        type: type,
        id: this.Id,
    }
    this.Id += 1;
    return transaction
  },
  deposit(amount) {
    this.balance += amount;
   const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
   this.transactions.push(transaction)
  },
  withdraw(amount) {
    if(amount > this.balance){
        alert("Зняття такої суми неможливо, недостатньо коштів")
        return
    }
    else{
        this.balance -= amount
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW)
        this.transactions.push(transaction)
    }
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    for(let i = 0; i < this.transactions.length; i += 1){
        if(this.transactions[i].id === id){
            return this.transactions[i]
        }
    }
    return "такого значення не існує"
  },
  getTransactionTotal(type) {
    let total = 0
    for(let i = 0; i < this.transactions.length; i += 1){
        if(this.transactions[i].type === type){
            total += this.transactions[i].amount
        }
    }
    return total
  },
};


account.deposit(1000);
account.deposit(5000);
account.withdraw(1000);
account.withdraw(1000);
account.withdraw(2000);
console.log(account.getBalance());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal("withdraw"));
console.log(account);






