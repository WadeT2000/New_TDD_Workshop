import {Customer, banksum, bankloan, Customers} from './Bank'

describe('Bank', () => {

  test('Should diplay how much money is in the bank and how much money is loaned', () => {
    let cust1 = new Customer();
    let cust2 = new Customer();

    cust1.deposit(500);
    cust2.deposit(700);
    cust2.transferCS(200);

    Customers.push(cust1)
    Customers.push(cust2)

    expect(banksum()).toBe(1200)
  })
  test('Customer has savings & checkings acc and transferable', () => {
    let cust1 = new Customer();

    cust1.deposit(700);
    cust1.transferCS(200);

    expect(cust1.saveBal).toEqual(200)
    expect(cust1.checkBal).toEqual(500)
  })
  test('Customer can deposit and withdraw schmonies', () => {
    let cust1 = new Customer();

    cust1.deposit(700);
    expect(cust1.checkBal).toEqual(700)
    
    expect(cust1.withdraw(800)).toEqual(-1)
    cust1.withdraw(200);  
    expect(cust1.checkBal).toBe(500)
})
  test('Customer can take out loan from bank and view it', () => {
    let cust1 = new Customer();
    cust1.takeLoan(5000)
    expect(cust1.viewLoans()).toEqual([{amount: 5000, interestRate: 2.5}])
  })

  test('Customer can take out loan from bank and view the loan total', () => {
    let cust1 = new Customer();
    cust1.takeLoan(5000)
    expect(cust1.getLoanTotal()).toBe(5000)
  })
  test('Customer can take out multiple loans with increasing interest rates', () => {
    let cust1 = new Customer();
    cust1.takeLoan(5000);
    cust1.takeLoan(3000);
    expect(cust1.viewLoans()).toEqual([
      { amount: 5000, interestRate: 2.5 },
      { amount: 3000, interestRate: 5.0 },
    ]);
    expect(cust1.getLoanTotal()).toBe(8000);
  });
  
  test('customer gets robbed randomly', () => {
    let cust1 = new Customer();
    cust1.deposit(1000);
    cust1.transferCS(500);
    cust1.getRobbed();

    expect(cust1.checkBal).toBe(0);
    expect(cust1.saveBal).toBe(0);
  })
  test('Government subsidies can reset the customer\'s loan balance to zero', () => {
    let cust1 = new Customer();
    cust1.takeLoan(5000);
    cust1.takeLoan(3000);

    expect(cust1.getLoanTotal()).toBe(8000);

    cust1.receiveSubsidy();

    expect(cust1.getLoanTotal()).toBe(0);
    expect(cust1.viewLoans()).toEqual([]);
  })
  test('Bank loan total updates correctly after loans and subsidies', () => {
    let cust1 = new Customer();
    let cust2 = new Customer();

    cust1.takeLoan(5000);
    cust2.takeLoan(3000);

    Customers.push(cust1);
    Customers.push(cust2);

    expect(bankloan()).toBe(8000);

    cust1.receiveSubsidy();
    expect(bankloan()).toBe(3000);

    cust2.receiveSubsidy();
    expect(bankloan()).toBe(0);
  });
});