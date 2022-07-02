import { TransactionType } from '../../entities/types/TransactionType';
import { Transaction } from '../../entities/types/Transaction';
import { Bank2AccountSource } from '../../services/bank2/integration/Bank2AccountSource';
import { TRANSACTION_TYPES } from '../../services/bank2/integration/Bank2AccountTransaction';
import { IBankServiceAdapter } from './IBankServiceAdapter';

export class Bank2Adapter implements IBankServiceAdapter {
  private bank2AccountSource!: Bank2AccountSource;

  constructor() {
    this.bank2AccountSource = new Bank2AccountSource();
  }

  public getBalance(): number {
    const accountBalanceInstance = this.bank2AccountSource.getBalance();
    return accountBalanceInstance.getBalance();
  }

  public getCurrency(): string {
    const accountCurrencyInstance = this.bank2AccountSource.getBalance();
    return accountCurrencyInstance.getCurrency();
  }

  public getTransactions(): Transaction[] {
    const accountTransactions = this.bank2AccountSource.getTransactions();
    const enumMapping = {
      [TRANSACTION_TYPES.CREDIT]: TransactionType.CREDIT,
      [TRANSACTION_TYPES.DEBIT]: TransactionType.DEBIT,
    };

    const transactions = accountTransactions.map(t => {
      return {
        amount: t.getAmount(),
        text: t.getText(),
        type: enumMapping[t.getType()],
        bank: 'bank2',
      };
    });

    return transactions;
  }
}
