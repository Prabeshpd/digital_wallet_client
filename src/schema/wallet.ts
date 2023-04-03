import * as Yup from 'yup';

export const WalletTransferSchema = Yup.object().shape({
  toWallet: Yup.string().email('Invalid email').trim().lowercase().required('Email is required'),
  balance: Yup.number().required('Must enter a valid number to transfer the amount'),
});

export const WalletVerifyTransactionPassword = Yup.object().shape({
  transactionPassword: Yup.string().required('Password is required'),
});
