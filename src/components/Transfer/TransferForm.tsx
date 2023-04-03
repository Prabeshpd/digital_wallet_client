import { Formik } from 'formik';
import * as React from 'react';

import { TransferState } from '../../constants/common';

import {} from '../../types/Wallet';

import { WalletTransferSchema } from '../../schema/wallet';

interface InjectedProps {
  handleFormSubmit: (payload: any) => void;
}

function TransferForm(props: InjectedProps) {
  const { handleFormSubmit } = props;
  return (
    <Formik
      initialValues={{
        toWallet: '',
        balance: 0,
      }}
      validationSchema={WalletTransferSchema}
      onSubmit={async (values) => {
        const payload = {
          toWallet: values.toWallet.trim(),
          balance: values.balance,
        };

        await handleFormSubmit(payload);
      }}
    >
      {({ handleBlur, handleChange, handleSubmit, errors, touched, isSubmitting }) => (
        <div className="callout cell large-12">
          <form onSubmit={handleSubmit}>
            <div className="grid-x grid-margin-x mt-5">
              <div style={{ marginLeft: '38%' }}>
                <h3>Wallet Transfer</h3>
              </div>
              <div className="cell small-12">
                <label>
                  <input
                    type="email"
                    placeholder="Receiver Email Id"
                    name="toWallet"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.toWallet && touched.toWallet && errors.toWallet}
                </label>
              </div>
              <div className="cell small-12">
                <label>
                  <input
                    type="number"
                    placeholder="Place the amount you need to transfer"
                    name="balance"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.balance && touched.balance && errors.balance}
                </label>
              </div>
            </div>
            <div className="grid-x grid-margin-x flex-container align-right">
              <button className="button large-2 small m-2 secondary hollow" type="reset" value="Reset">
                Cancel
              </button>
              <button className="button large-2 small m-2" type="submit" disabled={isSubmitting} value="Submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}

TransferForm.prototype.__type = TransferState.TRANSFER_STATE;

export default TransferForm;
