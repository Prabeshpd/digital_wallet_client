interface TransactionHistories {
  readonly transactionHistories: TransactionHistory[];
  readonly error: {
    readonly code: string;
    readonly message: string;
  };
  readonly meta: {
    readonly currentPage: number;
    readonly perPage: number;
    readonly totalCount: number;
  };
}

interface TransactionHistory {
  readonly id: number;
  readonly fromWalletId: string;
  readonly toWalletId: string;
  readonly amount: number;
  readonly status: string;
}

export default TransactionHistories;
