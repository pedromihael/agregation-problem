import { Transaction } from '../../entities/Transaction';

export interface IBankServiceAdapter {
  getTransactions(): Array<Transaction>;
  getBalance(): number;
  getCurrency(): string;
}
