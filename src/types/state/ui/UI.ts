import AppState from './AppState';
import LoginState from './LoginState';
import TransactionHistoriesState from './TransactionHistoryState';
import WalletState from './Wallet';

interface UI {
  readonly app: AppState;
  readonly login: LoginState;
  readonly transactionHistories: TransactionHistoriesState;
  readonly wallet: WalletState;
}

export default UI;
