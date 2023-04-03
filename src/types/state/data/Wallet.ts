interface Wallet {
  readonly wallet: {
    readonly id: number;
    readonly userId: number;
    readonly balance: number;
    readonly currency: string;
    readonly isVerified: boolean;
  };
  readonly error: {
    readonly code: string;
    readonly message: string;
  };
}

export default Wallet;
