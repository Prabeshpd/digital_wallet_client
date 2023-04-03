import { Formik } from 'formik';
import * as React from 'react';

import { TransferState } from '../../constants/common';

import { WalletVerifyTransactionPassword } from '../../schema/wallet';

interface VerifyTransactionPassword {
  transactionPassword: string;
}

interface InjectedProps {
  handleFormSubmit: (payload: VerifyTransactionPassword) => void;
}

function VerifyTransactionPasswordForm(props: InjectedProps) {
  const { handleFormSubmit } = props;
  return (
    <Formik
      initialValues={{
        transactionPassword: '',
      }}
      validationSchema={WalletVerifyTransactionPassword}
      onSubmit={async (values) => {
        const payload = {
          transactionPassword: values.transactionPassword.trim(),
        };

        await handleFormSubmit(payload);
      }}
    >
      {({ handleBlur, handleChange, handleSubmit, errors, touched, isSubmitting }) => (
        <div className="callout cell large-12">
          <form onSubmit={handleSubmit} style={{ minWidth: '500px' }}>
            <div className="grid-x grid-margin-x mt-5">
              <div style={{ marginLeft: '24px' }}>
                <h3>Transaction Password Verification</h3>
              </div>
              <div className="cell small-12 mt-5">
                <label>
                  <input
                    type="password"
                    name="transactionPassword"
                    placeholder="Transaction Password"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.transactionPassword && touched.transactionPassword && errors.transactionPassword}
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

VerifyTransactionPasswordForm.prototype.__type = TransferState.VERIFY_STATE;

export default VerifyTransactionPasswordForm;
