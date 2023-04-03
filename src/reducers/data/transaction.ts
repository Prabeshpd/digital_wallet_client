import { TransactionActions } from '../../actions';
import TransactionHistoriesState from '../../types/state/data/TransactionHistoryState';
import { FETCH_TRANSACTION_HISTORY_FULFILLED, FETCH_TRANSACTION_HISTORY_REJECTED } from '../../actions/transaction';

export const INITIAL_STATE: TransactionHistoriesState = {
  transactionHistories: [],
  meta: {
    perPage: 0,
    currentPage: 0,
    totalCount: 0,
  },
  error: {
    code: '',
    message: '',
  },
};

export default function transaction(
  state: TransactionHistoriesState = INITIAL_STATE,
  action: TransactionActions
): TransactionHistoriesState {
  switch (action.type) {
    case FETCH_TRANSACTION_HISTORY_FULFILLED: {
      return {
        ...state,
        transactionHistories: action.payload.data,
        meta: { ...state.meta, ...action.payload.metadata },
      };
    }

    case FETCH_TRANSACTION_HISTORY_REJECTED:
      return {
        ...state,
        error: {
          code: action.payload?.response?.data.code,
          message: action.payload?.response?.data.message,
        },
      };

    default:
      return state;
  }
}
