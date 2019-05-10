import Account from "./Account";
import Ledger from "./Ledger";

export default class BusinessAccount extends Account {
    constructor(ledger: Ledger, bankName: string) {
        super(ledger, bankName)
        this.transferFee = 0.02
    }
}