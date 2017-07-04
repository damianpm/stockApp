var axios = require('axios');
//http://finance.google.com/finance/info?q=NASDAQ:AAPL,NASDAQ:GOOG,NASDAQ:V
const BASE_URL = 'https://finance.google.com/finance/info?q=NASDAQ:';

module.exports = {
  getData: query => {
    var requestUrl = `${BASE_URL}${query}`;
    return axios.get(requestUrl).then(res => res.data, res => {throw new Error(`An error happened! \nHint: Try symbol with "GOOG", "V" or "AAPL"\nOr, if you are in local dev environment, upload to a server or enable CORS in your browser ;)`)});
  }
}
