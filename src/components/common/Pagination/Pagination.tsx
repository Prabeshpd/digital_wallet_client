import * as React from 'react';
import { useEffect } from 'react';

import { usePageTransfer, PAGINATION_CHANGE, PageProps } from './paginationHooks';

export interface ButtonProps {
  state: string;
  text: string;
  key: number;
  onClick: (age: number) => void;
}

function Pagination(pageProps: PageProps) {
  if (!pageProps.totalPageNumber || pageProps.totalPageNumber == 1) return <></>;

  let { state, dispatch } = usePageTransfer(pageProps);
  let startData = state.pageNumber === 1 ? 1 : (state.pageNumber - 1) * pageProps.pageLimit + 1;
  let endData =
    startData - 1 + pageProps.pageLimit > pageProps.totalLength
      ? pageProps.totalLength
      : startData - 1 + pageProps.pageLimit;
  return (
    <div className="table-footer">
      <div style={{ padding: '5px' }}>{`${startData} - ${endData} of ${pageProps.totalLength}`}</div>
      <div className="button-pagination">{createPaginationBlock(pageProps, state, dispatch)}</div>
    </div>
  );
}

function createPaginationBlock(pageProps: PageProps, state: any, dispatch: any) {
  useEffect(() => {
    pageProps.handleChange(state.pageNumber);
  }, [state.pageNumber]);

  let paginationButton: Array<any> = [];

  let prevButton = Button({
    state: 'inactive',
    text: 'Prev',
    onClick: () => {
      dispatch({ type: PAGINATION_CHANGE.PREV });
    },
    key: 0,
  });

  let nextButton = Button({
    state: 'inactive',
    text: 'Next',
    onClick: () => {
      dispatch({ type: PAGINATION_CHANGE.NEXT });
    },
    key: pageProps.totalPageNumber + 1,
  });

  paginationButton.push(prevButton);

  for (let i = 1; i <= pageProps.totalPageNumber; i++) {
    let props = Object.assign(
      {
        onClick: (page: number) => {
          dispatch({ type: PAGINATION_CHANGE.GOTO, payload: page });
        },
      },
      { state: 'inactive', text: i + '', key: i }
    );

    if (i == state.pageNumber) props.state = 'active';
    paginationButton.push(<Button {...props} />);
  }

  paginationButton.push(nextButton);
  return paginationButton;
}

function Button(buttonProps: ButtonProps) {
  return (
    <button
      className={buttonProps.state}
      onClick={() => {
        buttonProps.onClick(buttonProps.key);
      }}
    >
      {buttonProps.text}
    </button>
  );
}

export default Pagination;
