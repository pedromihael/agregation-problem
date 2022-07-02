import 'reflect-metadata';
import { container } from 'tsyringe';
import { IBankServiceAdapter } from '../../gateways/adapters/IBankServiceAdapter';
import { BanksFacade } from '../../gateways/facade/BanksFacade';

container.registerSingleton<IBankServiceAdapter>('BanksFacade', BanksFacade);
