var axios = require('axios');
//http://finance.google.com/finance/info?q=NASDAQ:AAPL,NASDAQ:GOOG,NASDAQ:V
const BASE_URL = 'http://finance.google.com/finance/info?q=NASDAQ:';

module.exports = {
  fetchData: (query) => {
    const requestUrl = `${BASE_URL}${query}`;
    let myRequest =axios.get(requestUrl);
    myRequest.then(function(data){
      console.log('---------------');
     console.log(data);
    });
    // return axios.get(requestUrl).then(res => res);
  }
}



