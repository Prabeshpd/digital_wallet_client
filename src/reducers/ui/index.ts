import { combineReducers } from 'redux';

import login from './Login';
import wallet from './wallet';
import transactionHistories from './transaction';

const uiReducers = combineReducers({ login, transactionHistories, wallet });

export default uiReducers;
