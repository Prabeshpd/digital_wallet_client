import { createAction } from 'redux-actions';

import * as transactionService from '../services/transaction';

import { Error, AxiosError } from '../types/Error';
import { TransactionHistory } from '../types/Transaction';
import { PaginationMeta } from '../types/Pagination';
import { Action, ActionWithError, ActionWithPayload } from '../types/Actions';

export const FETCH_TRANSACTION_HISTORY = 'FETCH_TRANSACTION_HISTORY';
export type FETCH_TRANSACTION_HISTORY = typeof FETCH_TRANSACTION_HISTORY;

export const FETCH_TRANSACTION_HISTORY_PENDING = 'FETCH_TRANSACTION_HISTORY_PENDING';
export type FETCH_TRANSACTION_HISTORY_PENDING = typeof FETCH_TRANSACTION_HISTORY_PENDING;

export const FETCH_TRANSACTION_HISTORY_FULFILLED = 'FETCH_TRANSACTION_HISTORY_FULFILLED';
export type FETCH_TRANSACTION_HISTORY_FULFILLED = typeof FETCH_TRANSACTION_HISTORY_FULFILLED;

export const FETCH_TRANSACTION_HISTORY_REJECTED = 'FETCH_TRANSACTION_HISTORY_REJECTED';
export type FETCH_TRANSACTION_HISTORY_REJECTED = typeof FETCH_TRANSACTION_HISTORY_REJECTED;

export type FetchTransactionPending = Action<FETCH_TRANSACTION_HISTORY_PENDING>;
export type FetchTransactionFulfilled = ActionWithPayload<
  FETCH_TRANSACTION_HISTORY_FULFILLED,
  { data: TransactionHistory[]; metadata: PaginationMeta }
>;
export type FetchTransactionRejected = ActionWithError<FETCH_TRANSACTION_HISTORY_REJECTED, AxiosError<Error>>;

export type FetchTransactionActions = FetchTransactionPending | FetchTransactionRejected | FetchTransactionFulfilled;

export const FetchTransaction = createAction(FETCH_TRANSACTION_HISTORY, transactionService.fetchTransactionHistory);
