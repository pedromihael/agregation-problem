import 'reflect-metadata';
import { autoInjectable, inject } from 'tsyringe';
import { ResponseBuilder } from '../entities/builders/ResponseBuilder';
import { Response } from '../entities/types/Response';
import { IBankServiceAdapter } from '../gateways/adapters/IBankServiceAdapter';

@autoInjectable()
export class GetBanksDataUseCase {
  constructor(
    @inject('BanksFacade')
    private banksFacade: IBankServiceAdapter,
  ) {}

  private getAccountData() {
    const accountBalance = this.banksFacade.getBalance();
    const accountCurrency = this.banksFacade.getCurrency();
    const accountTransactions = this.banksFacade.getTransactions();

    return {
      balance: accountBalance,
      currencies: accountCurrency,
      transactions: accountTransactions,
    };
  }

  async execute(): Promise<Response> {
    return new Promise((resolve, reject) => {
      const responseData = new ResponseBuilder().setRoute('/');
      const accountData = this.getAccountData();

      responseData.setStatus(200).setResponse(accountData);

      resolve(responseData.build());
    });
  }
}
