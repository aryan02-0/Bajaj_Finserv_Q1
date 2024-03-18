const axios = require('axios');
let data = JSON.stringify({
  "name": "Aryan Mann",
  "email": "aryan2427.be21@chitkara.edu.in",
  "rollNumber": 2110992427,
  "phone": 7380030343
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'BrowserId=N7LnYOUGEe6WNfM13Ov-XQ; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
