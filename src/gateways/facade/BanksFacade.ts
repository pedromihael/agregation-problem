import { Transaction } from '~/entities/Transaction';
import { Bank1Adapter } from '../adapters/Bank1Adapter';
import { Bank2Adapter } from '../adapters/Bank2Adapter';
import { IBankServiceAdapter } from '../adapters/IBankServiceAdapter';

export class BanksFacade implements IBankServiceAdapter {
  private bank1Adapter!: Bank1Adapter;
  private bank2Adapter!: Bank2Adapter;

  constructor() {
    this.bank1Adapter = new Bank1Adapter();
    this.bank2Adapter = new Bank2Adapter();
  }

  getTransactions(): Transaction[] {
    return [
      ...this.bank1Adapter.getTransactions(),
      ...this.bank2Adapter.getTransactions(),
    ];
  }

  getBalance(): number {
    return this.bank1Adapter.getBalance() + this.bank2Adapter.getBalance();
  }

  getCurrency(): string | Array<string> {
    const currency1 = this.bank1Adapter.getCurrency();
    const currency2 = this.bank2Adapter.getCurrency();

    if (currency1.toLocaleUpperCase() === currency2.toLocaleUpperCase()) {
      return [currency1];
    }

    return [currency1, currency2];
  }
}
