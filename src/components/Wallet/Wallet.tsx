import * as React from 'react';
import { connect } from 'react-redux';

import TransactionHistories from '../Transactions/Transactions';

import User from '../../types/User';
import AppState from '../../types/state/AppState';
import { Wallet } from '../../types/Wallet';
import { fetchWallet, createWallet, verifyWallet } from '../../actions/wallet';

interface StatePropsInterface {
  wallet: Wallet;
  user: User;
  isLoadingFetchWallet: boolean;
}

interface DispatchPropsInterface {
  fetchWallet: () => void;
  createWallet: () => void;
  verifyWallet: () => void;
}

type InjectedProps = StatePropsInterface & DispatchPropsInterface;

export function WalletComponent(props: InjectedProps) {
  const { user, wallet, isLoadingFetchWallet, fetchWallet, createWallet, verifyWallet } = props;

  React.useEffect(() => {
    async function loadWallet() {
      await fetchWallet();
    }

    loadWallet().catch((err) => console.log({ err }));
  }, []);

  const { name, email } = user;

  const { balance, currency, isVerified } = wallet;
  return (
    <React.Fragment>
      <div className="m-24">
        {!isLoadingFetchWallet && (
          <div className="callout cell large-12" style={{ minWidth: '500px' }}>
            <div className="media-object">
              <div className="media-object-section"></div>
              <div className="media-object-section">
                <h6 style={{ color: '#DAA520' }}>Name: {name}</h6>
                <h6 style={{ color: '#DAA520' }}>Email: {email}</h6>
              </div>
            </div>
            <div className="media-object">
              <div className="media-object-section"></div>
              <div className="media-object-section">
                <h6 style={{ color: '#DAA520' }}>Currency: {currency}</h6>
                <h6 style={{ color: '#DAA520' }}>Available Balance: {balance}</h6>
                <h6 style={{ color: '#DAA520' }}>{isVerified ? 'Verified' : 'Please verify your wallet'}</h6>
              </div>
            </div>
          </div>
        )}
        {!isVerified && wallet.id !== 0 && (
          <button
            className="large button custom-button"
            onClick={() => {
              verifyWallet();
            }}
          >
            Verify Wallet
          </button>
        )}
        {wallet.id === 0 ? (
          <button
            className="large button custom-button"
            onClick={() => {
              createWallet();
            }}
          >
            RegisterWallet
          </button>
        ) : (
          <></>
        )}

        {isVerified && <TransactionHistories />}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    user: state.data.user.user,
    wallet: state.data.wallet.wallet,
    isLoadingFetchWallet: state.ui.wallet.isLoadingFetchWallet,
  };
};

const mapDispatchToProps = {
  fetchWallet,
  createWallet,
  verifyWallet,
};

export default connect<StatePropsInterface, DispatchPropsInterface>(
  mapStateToProps,
  mapDispatchToProps
)(WalletComponent);
