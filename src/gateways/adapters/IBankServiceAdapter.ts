import { Transaction } from '../../entities/types/Transaction';

export interface IBankServiceAdapter {
  getTransactions(): Array<Transaction>;
  getBalance(): number;
  getCurrency(): string | Array<string>;
}
