import Ledger from "./Ledger";
import Transaction from "./Transaction";

export default class Account {
  protected transferFee: number = 0.01
  readonly ledger: Ledger
  readonly name: string

  constructor(ledger: Ledger, name: string) {
    this.ledger = ledger
    this.name = name
  }

  send(receiver: Account, amount: number, reference: string) {
    this.ledger.addTransaction(
      new Transaction(
        this, receiver, amount, reference
      )
    )
    
    this.ledger.addTransaction(
      new Transaction(
        this, this.ledger.bankAccount, this.transferFee, "transferFee"
      )
    )
  }

  get amount(): number {
    return this.ledger.calculateAmountForAccount(this)
  }

  get transactions(): Transaction[] {
    return this.ledger.findTransactionsForAccount(this)
  }
}