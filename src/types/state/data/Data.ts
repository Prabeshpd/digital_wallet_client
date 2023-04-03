import UserState from './UserState';
import TransactionHistoriesState from './TransactionHistoryState';
import WalletState from './Wallet';

interface DataState {
  readonly user: UserState;
  readonly transactionHistories: TransactionHistoriesState;
  readonly wallet: WalletState;
}

export default DataState;
