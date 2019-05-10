import Transaction from "./Transaction";
import Account from "./Account";

export default class Ledger {
  readonly transactions: Transaction[]
  public bankAccount: Account

  constructor() { 
    this.transactions = [] 
  }

  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction)
  }

  calculateAmountForAccount(account: Account): number {
    // return this.transactions.reduce(function(prev, cur) {
    //   return prev + cur.amount
    // }, 0)

    return this.transactions.reduce((sum, transaction) => { return sum + transaction.amount }, 0)
  }

  // use "filter"
  findTransactionsForAccount(account: Account): Transaction[] {
    return account.transactions
  }

}