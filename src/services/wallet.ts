import config from '../config';
import http from '../utils/http';
import { toSnakeCase } from '../utils/object';
import { VerifyWalletTransaction, WalletTransaction } from '../types/Wallet';

export async function fetchMyWallet() {
  const url = config.endpoints.fetchMyWallet;
  const { data } = await http.get(url);

  return data;
}

export async function createWallet() {
  const url = config.endpoints.createWallet;
  const { data } = await http.post(url);

  return data;
}

export async function verifyWallet() {
  const url = config.endpoints.verifyWallet;
  const { data } = await http.post(url);

  return data;
}

export async function verifyWalletTransaction(payload: VerifyWalletTransaction) {
  const url = config.endpoints.verifyWalletTransaction;
  const { data } = await http.post(url, toSnakeCase(payload));

  return data;
}

export async function walletTransaction(payload: WalletTransaction) {
  const url = config.endpoints.walletTransfer;
  const { data } = await http.post(url, payload);

  return data;
}
