import axios from 'axios';
import { API_URL } from '../utils/constants';

export const getQuote = (symbol = 'AAPL') => {
  return axios
    .get(
      `${API_URL}/quote?symbol=${symbol}&token=${process.env.REACT_APP_FINNHUB_API_KEY}`,
    )
    .then((response) => response.data);
};
