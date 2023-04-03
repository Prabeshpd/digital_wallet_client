import * as React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { VerifyWalletTransaction, Wallet, WalletTransaction } from '../../types/Wallet';
import AppState from '../../types/state/AppState';

import { fetchWallet, transferWalletBalance } from '../../actions/wallet';

import { TransferState } from '../../constants/common';

import { verifyWalletTransaction } from '../../services/wallet';

import TransferForm from './TransferForm';
import VerifyTransactionPasswordForm from './VerifyTransactionPasswordModal';
import { SwitcherComponent } from '../common/SwitcherComponent/SwitecherComponent';

interface StatePropsInterface {
  wallet: Wallet;
  isLoadingFetchWallet: boolean;
}

interface DispatchPropsInterface {
  fetchWallet: () => void;
  transferWalletBalance: (payload: WalletTransaction) => void;
}

type InjectedProps = StatePropsInterface & DispatchPropsInterface;

export function TransferComponent(props: InjectedProps) {
  const navigate = useNavigate();

  const [error, setError] = React.useState<any>(null);
  const { fetchWallet, transferWalletBalance } = props;
  const [transferState, setTransferState] = React.useState<TransferState>(TransferState.TRANSFER_STATE);
  const [verifiedData, setVerifiedData] = React.useState<VerifyWalletTransaction | null>(null);
  const [uniqueIdentifier, setUniqueIdentifier] = React.useState<string | null>(null);

  const handleTransferFormSubmit = async (payload: VerifyWalletTransaction) => {
    setError(null);
    try {
      const data = await verifyWalletTransaction(payload);
      setVerifiedData(payload);
      setTransferState(TransferState.VERIFY_STATE);
      setUniqueIdentifier(data.uniqueIdForTransaction);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  const handleVerificationFormSubmit = async (payload: { transactionPassword: string }) => {
    setError(null);
    try {
      if (!verifiedData || !uniqueIdentifier) {
        setError('OOps! Some Error Occured');
        return;
      }

      const walletTransactionPayload = {
        ...verifiedData,
        uniqueIdentifier,
        transactionPassword: payload.transactionPassword,
      };

      await transferWalletBalance(walletTransactionPayload);
      navigate('/app/wallet');
    } catch (err) {
      setError(err);
    }
  };

  React.useEffect(() => {
    async function loadWallet() {
      await fetchWallet();
    }

    loadWallet().catch((err) => console.log(err));
  }, []);

  const { wallet } = props;

  if (!wallet.isVerified) return <div>Please verify your account first</div>;

  return (
    <React.Fragment>
      <div className="m-24">
        {error && <div>OOps some error occured! try again</div>}
        <SwitcherComponent type={transferState}>
          <TransferForm handleFormSubmit={handleTransferFormSubmit} />
          <VerifyTransactionPasswordForm handleFormSubmit={handleVerificationFormSubmit} />
        </SwitcherComponent>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    wallet: state.data.wallet.wallet,
    isLoadingFetchWallet: state.ui.wallet.isLoadingFetchWallet,
  };
};

const mapDispatchToProps = {
  fetchWallet,
  transferWalletBalance,
};

export default connect<StatePropsInterface, DispatchPropsInterface>(
  mapStateToProps,
  mapDispatchToProps
)(TransferComponent);
