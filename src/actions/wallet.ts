import { createAction } from 'redux-actions';

import { Wallet } from '../types/Wallet';
import { Error, AxiosError } from '../types/Error';
import * as walletService from '../services/wallet';
import { Action, ActionWithError, ActionWithPayload } from '../types/Actions';

export const FETCH_WALLET = 'FETCH_WALLET';
export type FETCH_WALLET = typeof FETCH_WALLET;

export const VERIFY_WALLET = 'VERIFY_WALLET';
export type VERIFY_WALLET = typeof VERIFY_WALLET;

export const CREATE_WALLET = 'CREATE_WALLET';
export type CREATE_WALLET = typeof CREATE_WALLET;

export const PERFORM_TRANSACTION_WALLET = 'PERFORM_TRANSACTION_WALLET';
export type PERFORM_TRANSACTION_WALLET = typeof PERFORM_TRANSACTION_WALLET;

export const FETCH_WALLET_PENDING = 'FETCH_WALLET_PENDING';
export type FETCH_WALLET_PENDING = typeof FETCH_WALLET_PENDING;

export const FETCH_WALLET_FULFILLED = 'FETCH_WALLET_FULFILLED';
export type FETCH_WALLET_FULFILLED = typeof FETCH_WALLET_FULFILLED;

export const FETCH_WALLET_REJECTED = 'FETCH_WALLET_REJECTED';
export type FETCH_WALLET_REJECTED = typeof FETCH_WALLET_REJECTED;

export const VERIFY_WALLET_PENDING = 'VERIFY_WALLET_PENDING';
export type VERIFY_WALLET_PENDING = typeof VERIFY_WALLET_PENDING;

export const VERIFY_WALLET_FULFILLED = 'VERIFY_WALLET_FULFILLED';
export type VERIFY_WALLET_FULFILLED = typeof VERIFY_WALLET_FULFILLED;

export const VERIFY_WALLET_REJECTED = 'VERIFY_WALLET_REJECTED';
export type VERIFY_WALLET_REJECTED = typeof VERIFY_WALLET_REJECTED;

export const CREATE_WALLET_PENDING = 'CREATE_WALLET_PENDING';
export type CREATE_WALLET_PENDING = typeof CREATE_WALLET_PENDING;

export const CREATE_WALLET_FULFILLED = 'CREATE_WALLET_FULFILLED';
export type CREATE_WALLET_FULFILLED = typeof CREATE_WALLET_FULFILLED;

export const CREATE_WALLET_REJECTED = 'CREATE_WALLET_REJECTED';
export type CREATE_WALLET_REJECTED = typeof CREATE_WALLET_REJECTED;

export const PERFORM_TRANSACTION_WALLET_PENDING = 'PERFORM_TRANSACTION_WALLET_PENDING';
export type PERFORM_TRANSACTION_WALLET_PENDING = typeof PERFORM_TRANSACTION_WALLET_PENDING;

export const PERFORM_TRANSACTION_WALLET_FULFILLED = 'PERFORM_TRANSACTION_WALLET_FULFILLED';
export type PERFORM_TRANSACTION_WALLET_FULFILLED = typeof PERFORM_TRANSACTION_WALLET_FULFILLED;

export const PERFORM_TRANSACTION_WALLET_REJECTED = 'PERFORM_TRANSACTION_WALLET_REJECTED';
export type PERFORM_TRANSACTION_WALLET_REJECTED = typeof PERFORM_TRANSACTION_WALLET_REJECTED;

export type FetchWalletPending = Action<FETCH_WALLET_PENDING>;
export type FetchWalletFulfilled = ActionWithPayload<FETCH_WALLET_FULFILLED, Wallet>;
export type FetchWalletRejected = ActionWithError<FETCH_WALLET_REJECTED, AxiosError<Error>>;

export type VerifyWalletPending = Action<VERIFY_WALLET_PENDING>;
export type VerifyWalletFulfilled = ActionWithPayload<VERIFY_WALLET_FULFILLED, Wallet>;
export type VerifyWalletRejected = ActionWithError<VERIFY_WALLET_REJECTED, AxiosError<Error>>;

export type CreateWalletPending = Action<CREATE_WALLET_PENDING>;
export type CreateWalletFulfilled = ActionWithPayload<CREATE_WALLET_FULFILLED, Wallet>;
export type CreateWalletRejected = ActionWithError<CREATE_WALLET_REJECTED, AxiosError<Error>>;

export type PerformTransactionWalletPending = Action<PERFORM_TRANSACTION_WALLET_PENDING>;
export type PerformTransactionWalletFulfilled = ActionWithPayload<PERFORM_TRANSACTION_WALLET_FULFILLED, Wallet>;
export type PerformTransactionWalletRejected = ActionWithError<PERFORM_TRANSACTION_WALLET_REJECTED, AxiosError<Error>>;

export type FetchWalletActions = FetchWalletPending | FetchWalletRejected | FetchWalletFulfilled;

export type VerifyWalletActions = VerifyWalletPending | VerifyWalletRejected | VerifyWalletFulfilled;

export type CreateWalletActions = CreateWalletPending | CreateWalletRejected | CreateWalletFulfilled;

export type PerformWalletTransactionActions =
  | PerformTransactionWalletPending
  | PerformTransactionWalletRejected
  | PerformTransactionWalletFulfilled;

export const fetchWallet = createAction(FETCH_WALLET, walletService.fetchMyWallet);
export const createWallet = createAction(CREATE_WALLET, walletService.createWallet);
export const verifyWallet = createAction(VERIFY_WALLET, walletService.verifyWallet);
export const transferWalletBalance = createAction(PERFORM_TRANSACTION_WALLET, walletService.walletTransaction);
