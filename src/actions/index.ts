import { LogoutActions } from './logout';
import { FetchTransactionActions } from './transaction';
import { LoginActions, RefreshTokenActions } from './login';
import {
  FetchWalletActions,
  VerifyWalletActions,
  PerformWalletTransactionActions,
  CreateWalletActions,
} from './wallet';

export type TransactionActions = FetchTransactionActions;
export type AuthActions = LoginActions | RefreshTokenActions | LogoutActions;
export type WalletActions =
  | FetchWalletActions
  | VerifyWalletActions
  | PerformWalletTransactionActions
  | CreateWalletActions;
