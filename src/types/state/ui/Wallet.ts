interface Wallet {
  readonly error: object;
  readonly errorCode: string;
  readonly isFetchWalletFailed: boolean;
  readonly isLoadingFetchWallet: boolean;
  readonly isVerifyWalletFailed: boolean;
  readonly isLoadingVerifyWallet: boolean;
  readonly isCreateWalletFailed: boolean;
  readonly isCreateWalletLoading: boolean;
  readonly isLoadingWalletTransaction: boolean;
  readonly isWalletTransactionFailed: boolean;
}

export default Wallet;
