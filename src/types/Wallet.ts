export interface Wallet {
  id: number;
  userId: number;
  balance: number;
  isVerified: boolean;
  currency: string;
}

export type WalletPayload = Omit<Wallet, 'id' | 'isVerified' | 'currency' | 'balance'>;

export interface VerifyWalletTransaction {
  toWallet: string;
  amount: number;
}

export interface WalletTransaction extends VerifyWalletTransaction {
  transactionPassword: string;
  uniqueIdentifier: string;
}
