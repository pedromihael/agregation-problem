import { Transaction } from '../../entities/types/Transaction';
import { Bank1AccountSource } from '../../services/bank1/integration/Bank1AccountSource';
import { IBankServiceAdapter } from './IBankServiceAdapter';

export class Bank1Adapter implements IBankServiceAdapter {
  private bank1AccountSource!: Bank1AccountSource;

  constructor() {
    this.bank1AccountSource = new Bank1AccountSource();
  }

  public getBalance(): number {
    return this.bank1AccountSource.getAccountBalance();
  }

  public getCurrency(): string {
    return this.bank1AccountSource.getAccountCurrency();
  }

  public getTransactions(): Transaction[] {
    const accountTransactions = this.bank1AccountSource.getTransactions();
    const transactions = accountTransactions.map(t => {
      return {
        amount: t.getAmount(),
        text: t.getText(),
        type: t.getType(),
      };
    });

    return transactions;
  }
}
