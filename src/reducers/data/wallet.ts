import { WalletActions } from '../../actions';
import WalletState from '../../types/state/data/Wallet';
import {
  FETCH_WALLET_FULFILLED,
  FETCH_WALLET_REJECTED,
  VERIFY_WALLET_FULFILLED,
  VERIFY_WALLET_REJECTED,
  CREATE_WALLET_FULFILLED,
  CREATE_WALLET_REJECTED,
  PERFORM_TRANSACTION_WALLET_FULFILLED,
  PERFORM_TRANSACTION_WALLET_REJECTED,
} from '../../actions/wallet';

export const INITIAL_STATE: WalletState = {
  wallet: { id: 0, balance: 0, userId: 0, currency: '', isVerified: false },
  error: {
    code: '',
    message: '',
  },
};

export default function (state: WalletState = INITIAL_STATE, action: WalletActions): WalletState {
  switch (action.type) {
    case FETCH_WALLET_FULFILLED: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case CREATE_WALLET_FULFILLED: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case VERIFY_WALLET_FULFILLED: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case PERFORM_TRANSACTION_WALLET_FULFILLED: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case FETCH_WALLET_REJECTED:
      return {
        ...state,
        error: {
          code: action.payload?.response?.data.code,
          message: action.payload?.response?.data.message,
        },
      };

    case CREATE_WALLET_REJECTED:
      return {
        ...state,
        error: {
          code: action.payload?.response?.data.code,
          message: action.payload?.response?.data.message,
        },
      };

    case VERIFY_WALLET_REJECTED:
      return {
        ...state,
        error: {
          code: action.payload?.response?.data.code,
          message: action.payload?.response?.data.message,
        },
      };

    case PERFORM_TRANSACTION_WALLET_REJECTED:
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
