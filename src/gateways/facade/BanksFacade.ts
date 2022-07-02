import { Transaction } from '../../entities/types/Transaction';
import { Bank1Adapter } from '../adapters/Bank1Adapter';
import { Bank2Adapter } from '../adapters/Bank2Adapter';
import { IBankServiceAdapter } from '../adapters/IBankServiceAdapter';

type BalancesByCurrency = {
  currency: string;
  balances: number[];
};

export class BanksFacade implements IBankServiceAdapter {
  private bank1Adapter!: Bank1Adapter;
  private bank2Adapter!: Bank2Adapter;

  constructor() {
    this.bank1Adapter = new Bank1Adapter();
    this.bank2Adapter = new Bank2Adapter();
  }

  private groupBalancesByCurrency(): BalancesByCurrency[] {
    let balancesByCurrency: BalancesByCurrency[] = [];

    const sortedAdapters = [this.bank1Adapter, this.bank2Adapter];

    sortedAdapters.forEach(adp => {
      const currency = adp.getCurrency();
      const balance = adp.getBalance();

      const group = balancesByCurrency.find(b => b.currency === currency);
      if (group) {
        const updatedBalances = [...group.balances, balance];

        balancesByCurrency = balancesByCurrency.filter(
          b => b.currency != currency,
        );

        balancesByCurrency = [
          ...balancesByCurrency,
          { currency, balances: updatedBalances },
        ];
      } else {
        balancesByCurrency.push({ currency, balances: [balance] });
      }
    });

    return balancesByCurrency;
  }

  getTransactions(): Transaction[] {
    return [
      ...this.bank1Adapter.getTransactions(),
      ...this.bank2Adapter.getTransactions(),
    ];
  }

  getBalance(): any {
    const balancesByCurrency = this.groupBalancesByCurrency();

    const balances = balancesByCurrency.map(b => {
      return {
        currency: b.currency,
        balance: b.balances.reduce((prev, curr) => (prev ? prev + curr : curr)),
      };
    });

    return balances;
  }

  getCurrency(): Array<string> {
    const currency1 = this.bank1Adapter.getCurrency();
    const currency2 = this.bank2Adapter.getCurrency();

    if (currency1.toLocaleUpperCase() === currency2.toLocaleUpperCase()) {
      return [currency1];
    }

    return [currency1, currency2];
  }
}
