import config from '../config';
import http from '../utils/http';
import * as qs from '../utils/queryString';
import { PageParams } from '../types/Transaction';
import { toSnakeCase, toCamelCase } from '../utils/object';

export async function fetchTransactionHistory(params: PageParams) {
  const queryString = (params && qs.stringify(toSnakeCase(params))) || '';

  const url = config.endpoints.fetchTransactionHistory + queryString;
  const { data } = await http.get(url);

  return toCamelCase(data);
}
