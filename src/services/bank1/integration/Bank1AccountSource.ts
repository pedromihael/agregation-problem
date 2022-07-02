import { Bank1Transaction, TYPE_CREDIT, TYPE_DEBIT } from './Bank1Transaction';

export class Bank1AccountSource {
  public getAccountBalance(accountId?: number): number {
    return 215.5;
  }

  public getAccountCurrency(accountId?: number): string {
    return 'USD';
  }

  public getTransactions(
    accountId?: number,
    fromDate?: Date,
    toDate?: Date,
  ): Array<Bank1Transaction> {
    const tValues = [
      { amount: 100, type: TYPE_CREDIT, text: 'Check deposit' },
      { amount: 25.5, type: TYPE_DEBIT, text: 'Debit card purchase' },
      { amount: 252, type: TYPE_CREDIT, text: 'Rent payment' },
    ];

    const transactions = tValues.map(
      ({ amount, type, text }) => new Bank1Transaction(amount, type, text),
    );

    return transactions;
  }
}
