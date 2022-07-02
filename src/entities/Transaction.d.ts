import { TransactionType } from './TransactionType';

export type Transaction = {
  amount: number;
  text: string;
  type: TransactionType;
};
