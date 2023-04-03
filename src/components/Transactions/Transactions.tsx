import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import Pagination from '../common/Pagination/Pagination';

import { FetchTransaction } from '../../actions/transaction';

import AppState from '../../types/state/AppState';
import { PageParams, TransactionHistory } from '../../types/Transaction';
import { PaginationMeta } from 'types/Pagination';

interface StatePropsInterface {
  transactionHistories: TransactionHistory[];
  isTransactionHistoryLoading: boolean;
  meta: PaginationMeta;
}

interface DispatchPropsInterface {
  FetchTransaction: (pageParams: PageParams) => void;
}

type InjectedProps = StatePropsInterface & DispatchPropsInterface;

export function TransactionHistoryComponent(props: InjectedProps) {
  const { FetchTransaction } = props;
  const [pageNumber, setPageNumber] = useState<number>(1);

  React.useEffect(() => {
    async function fetchTransactionHistory() {
      const queryParams = { perPage: 10, page: pageNumber };

      await FetchTransaction(queryParams);
    }

    fetchTransactionHistory().catch((err) => console.log(err));
  }, [pageNumber]);

  const { meta, transactionHistories, isTransactionHistoryLoading } = props;

  return (
    <React.Fragment>
      {!isTransactionHistoryLoading && (
        <div className="callout cell large-12">
          <h3>Transaction History</h3>
          <table>
            <thead>
              <tr>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactionHistories.map((transaction) => {
                return (
                  <tr>
                    <td>{transaction.fromWalletId}</td>
                    <td>{transaction.toWalletId}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            totalPageNumber={Math.ceil(meta.totalCount / meta.perPage)}
            pageLimit={meta.perPage}
            pageNo={meta.currentPage}
            handleChange={(number: number) => {
              setPageNumber(number);
            }}
            totalLength={meta.totalCount}
          />
        </div>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    transactionHistories: state.data.transactionHistories.transactionHistories,
    meta: state.data.transactionHistories.meta,
    isTransactionHistoryLoading: state.ui.transactionHistories.isLoadingFetchTransactionHistory,
  };
};

const mapDispatchToProps = {
  FetchTransaction,
};

export default connect<StatePropsInterface, DispatchPropsInterface>(
  mapStateToProps,
  mapDispatchToProps
)(TransactionHistoryComponent);
