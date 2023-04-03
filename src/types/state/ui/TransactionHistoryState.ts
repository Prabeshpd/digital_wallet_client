interface TransactionHistories {
  readonly error: object;
  readonly errorCode: string;
  readonly isFetchTransactionHistoryFailed: boolean;
  readonly isLoadingFetchTransactionHistory: boolean;
}

export default TransactionHistories;
