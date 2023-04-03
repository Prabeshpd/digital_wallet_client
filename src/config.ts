export interface Config {
  nodeEnv?: string;
  env?: string;
  baseURI: string;
  endpoints: {
    refresh: string;
    login: string;
    logout: string;
    verifyToken: string;
    createUser: string;
    fetchTransactionHistory: string;
    fetchMyWallet: string;
    createWallet: string;
    verifyWallet: string;
    verifyWalletTransaction: string;
    walletTransfer: string;
  };
}

const config: Config = {
  nodeEnv: process.env.NODE_ENV,
  env: process.env.REACT_APP_ENV || 'dev',
  baseURI: `${process.env.REACT_APP_API_BASE_URI}`,
  endpoints: {
    // Auth
    login: '/auth/login',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    verifyToken: '/auth/verifyToken',

    fetchTransactionHistory: '/transactions',
    fetchMyWallet: '/wallets',
    createWallet: '/wallets',
    verifyWallet: '/wallets/verify',
    verifyWalletTransaction: '/wallets/transfer/verify',
    walletTransfer: '/wallets/transfer',

    //User
    createUser: '/users'
  }
};

export default config;
