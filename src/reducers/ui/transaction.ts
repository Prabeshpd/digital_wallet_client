import { TransactionActions } from '../../actions';
import TransactionHistoryState from '../../types/state/ui/TransactionHistoryState';
import {
  FETCH_TRANSACTION_HISTORY_FULFILLED,
  FETCH_TRANSACTION_HISTORY_PENDING,
  FETCH_TRANSACTION_HISTORY_REJECTED,
} from '../../actions/transaction';

export const INITIAL_STATE: TransactionHistoryState = {
  error: {},
  errorCode: '',
  isFetchTransactionHistoryFailed: false,
  isLoadingFetchTransactionHistory: false,
};

export default function transactionHistory(
  state: TransactionHistoryState = INITIAL_STATE,
  action: TransactionActions
): TransactionHistoryState {
  switch (action.type) {
    case FETCH_TRANSACTION_HISTORY_PENDING:
      return {
        ...state,
        isLoadingFetchTransactionHistory: true,
      };

    case FETCH_TRANSACTION_HISTORY_FULFILLED:
      return {
        ...state,
        isLoadingFetchTransactionHistory: false,
      };

    case FETCH_TRANSACTION_HISTORY_REJECTED:
      return {
        ...state,
        isLoadingFetchTransactionHistory: false,
        isFetchTransactionHistoryFailed: true,
        error: action.payload?.response?.data,
        errorCode: action.payload?.response?.data.code,
      };

    default:
      return state;
  }
}
