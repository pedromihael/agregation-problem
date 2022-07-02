import { Transaction } from './Transaction';

export type BankAccount = {
  id: number;
  balance: number;
  currency: string;
  transactions: Array<Transaction>;
};
