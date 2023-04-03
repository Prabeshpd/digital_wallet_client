export interface PageParams {
  page: number;
  perPage: Number;
}

export interface TransactionHistory {
  id: number;
  fromWalletId: string;
  toWalletId: string;
  amount: number;
  status: string;
}
