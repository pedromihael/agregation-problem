import { GetBanksDataUseCase } from '../useCases/GetBanksDataUseCase';
import { BanksFacade } from '../gateways/facade/BanksFacade';

export const GetBankDataController = async () => {
  const getBanksDataUseCase = new GetBanksDataUseCase(new BanksFacade());
  return getBanksDataUseCase.execute();
};
