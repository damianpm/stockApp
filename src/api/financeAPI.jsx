var axios = require('axios');
//http://finance.google.com/finance/info?q=NASDAQ:AAPL,NASDAQ:GOOG,NASDAQ:V
const BASE_URL = 'https://finance.google.com/finance/info?q=NASDAQ:';

module.exports = {
  getData: query => {
    var requestUrl = `${BASE_URL}${query}`;
    return axios.get(requestUrl).then(res => res.data, res => {throw new Error('Error!')});
  }
}
