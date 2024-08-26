//You have been asked to create a banking application
//The bank can keep track of how much money it has, and how much it has loaned.
//DONE Customers have a saving account, checking account, and need to be able to transfer money between the two.
//DONE Customers need to be able to deposit and withdraw money
//Customers can also take out loans from the bank, and need to be able to view them
//The interest rate starts at 2.5% and doubles for every additional loan a customer takes out (but the other loans stay the same: loan 1 2.5%, loan 2 is 5%, etc)
//DONE Robbers can come in an rob a customer at random (empty their accounts)
//Government subsidies can come in and "cancel debt" (reset loan balance)


export let Customers: Array<Customer> = [];

export function banksum(): number {
  let total = 0;
  for (let customer of Customers) {
    total += customer.saveBal + customer.checkBal;
  }
  return total;
}

export function bankloan(): number {
  let totalLoans = 0;
  for (let customer of Customers) {
    totalLoans += customer.getLoanTotal();
  }
  return totalLoans;
}

export class Customer {
  saveBal: number;
  checkBal: number;
  private loans: Array<{ amount: number, interestRate: number }>;

  constructor() {
    this.saveBal = 0;
    this.checkBal = 0;
    this.loans = [];
  }

  deposit(money: number): number {
    this.checkBal += money;
    return this.checkBal;
  }

  withdraw(money: number): number {
    if (money <= this.checkBal) {
      this.checkBal -= money;
    } else {
      return -1;
    }
    return this.checkBal;
  }

  transferCS(money: number): string {
    if (this.checkBal >= money) {
      this.checkBal -= money;
      this.saveBal += money;
      return "Transfer successful";
    } else {
      return "Insufficient funds for transfer";
    }
  }

  transferSC(money: number): string {
    if (this.saveBal >= money) {
      this.saveBal -= money;
      this.checkBal += money;
      return "Transfer successful";
    } else {
      return "Insufficient funds for transfer";
    }
  }

  takeLoan(amount: number): void {
    const interestRate = 2.5 * Math.pow(2, this.loans.length); 
    this.loans.push({ amount, interestRate });
  }

  viewLoans(): Array<{ amount: number, interestRate: number }> {
    return this.loans;
  }

  getLoanTotal(): number {
    return this.loans.reduce((total, loan) => total + loan.amount, 0);
  }

  getRobbed(): void {
    this.checkBal = 0;
    this.saveBal = 0;
  }
  
  receiveSubsidy(): void {
    this.loans = [];
  }
}

/*
customer
-savingsbalance, cheking ballance
-savingsdeposit, ...
-savingswithdraw...
-getloan?


account
-savings, checking,
--deposit, withdraw (methods)

totalmoney sum(savigns, chekcings - loans)

*/