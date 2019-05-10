import Account from "./Account";

export default class Transaction {
  readonly sender: Account | null
  readonly receiver: Account
  readonly amount: number
  readonly reference: string
  
  constructor(
    sender: Account,
    receiver: Account,
    amount: number,
    reference: string
  ) {
    this.sender = sender
    this.receiver = receiver
    this.amount = amount
    this.reference = reference
  }
}