import { combineReducers } from 'redux';

import user from './user';
import wallet from './wallet';
import transactionHistories from './transaction';

const dataReducers = combineReducers({ user, transactionHistories, wallet });

export default dataReducers;
