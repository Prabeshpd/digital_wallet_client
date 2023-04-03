import { WalletActions } from '../../actions';
import WalletState from '../../types/state/ui/Wallet';
import {
  FETCH_WALLET_FULFILLED,
  FETCH_WALLET_PENDING,
  FETCH_WALLET_REJECTED,
  VERIFY_WALLET_FULFILLED,
  VERIFY_WALLET_PENDING,
  VERIFY_WALLET_REJECTED,
  CREATE_WALLET_FULFILLED,
  CREATE_WALLET_PENDING,
  CREATE_WALLET_REJECTED,
  PERFORM_TRANSACTION_WALLET_FULFILLED,
  PERFORM_TRANSACTION_WALLET_PENDING,
  PERFORM_TRANSACTION_WALLET_REJECTED,
} from '../../actions/wallet';

export const INITIAL_STATE: WalletState = {
  error: {},
  errorCode: '',
  isFetchWalletFailed: false,
  isLoadingVerifyWallet: false,
  isVerifyWalletFailed: false,
  isLoadingFetchWallet: false,
  isCreateWalletFailed: false,
  isCreateWalletLoading: false,
  isLoadingWalletTransaction: false,
  isWalletTransactionFailed: false,
};

export default function wallet(state: WalletState = INITIAL_STATE, action: WalletActions): WalletState {
  switch (action.type) {
    case FETCH_WALLET_PENDING:
      return {
        ...state,
        isLoadingFetchWallet: true,
      };

    case FETCH_WALLET_FULFILLED:
      return {
        ...state,
        isLoadingFetchWallet: false,
      };

    case FETCH_WALLET_REJECTED: {
      return {
        ...state,
        isLoadingFetchWallet: false,
        isFetchWalletFailed: true,
        error: action.payload?.response?.data,
        errorCode: action.payload?.response?.data.code,
      };
    }

    case CREATE_WALLET_PENDING:
      return {
        ...state,
        isCreateWalletLoading: true,
      };

    case CREATE_WALLET_FULFILLED:
      return {
        ...state,
        isCreateWalletLoading: false,
      };

    case CREATE_WALLET_REJECTED: {
      return {
        ...state,
        isCreateWalletFailed: true,
        isCreateWalletLoading: false,
        error: action.payload?.response?.data,
        errorCode: action.payload?.response?.data.code,
      };
    }

    case VERIFY_WALLET_PENDING:
      return {
        ...state,
        isLoadingVerifyWallet: true,
      };

    case VERIFY_WALLET_FULFILLED:
      return {
        ...state,
        isLoadingVerifyWallet: false,
      };

    case VERIFY_WALLET_REJECTED:
      return {
        ...state,
        isLoadingVerifyWallet: false,
        isVerifyWalletFailed: true,
        error: action.payload?.response?.data,
        errorCode: action.payload?.response?.data.code,
      };

    case PERFORM_TRANSACTION_WALLET_PENDING:
      return {
        ...state,
        isLoadingWalletTransaction: true,
      };

    case PERFORM_TRANSACTION_WALLET_FULFILLED:
      return {
        ...state,
        isLoadingWalletTransaction: false,
      };

    case PERFORM_TRANSACTION_WALLET_REJECTED:
      return {
        ...state,
        isLoadingWalletTransaction: false,
        isWalletTransactionFailed: true,
        error: action.payload?.response?.data,
        errorCode: action.payload?.response?.data.code,
      };

    default:
      return state;
  }
}
