import { Bank2AccountBalance } from './Bank2AccountBalance';
import {
  Bank2AccountTransaction,
  TRANSACTION_TYPES,
} from './Bank2AccountTransaction';

export class Bank2AccountSource {
  public getBalance(accountNum?: number) {
    return new Bank2AccountBalance(512.5, 'USD');
  }

  public getTransactions(
    accountNum?: number,
    fromDate?: Date,
    toDate?: Date,
  ): Array<Bank2AccountTransaction> {
    const tValues = [
      { amount: 125, type: TRANSACTION_TYPES.DEBIT, text: 'Amazon.com' },
      { amount: 500, type: TRANSACTION_TYPES.DEBIT, text: 'Car insurance' },
      { amount: 800, type: TRANSACTION_TYPES.CREDIT, text: 'Salary' },
    ];

    const transactions = tValues.map(
      ({ amount, type, text }) =>
        new Bank2AccountTransaction(amount, type, text),
    );

    return transactions;
  }
}
