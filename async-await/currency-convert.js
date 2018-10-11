// USD, CAD, 20
// 20 USD is worth 26 CAD. You can spend these in the following countries: Canada
//http://data.fixer.io/api/latest?access_key=de6eadb86fed44e838f176a29c2d1f24&format=1

//var info = http://data.fixer.io/api/latest?access_key=de6eadb86fed44e838f176a29c2d1f24&format=1;
const axios = require('axios');

// const getExchangeRate = (from, to) => {
//   return axios.get('http://data.fixer.io/api/latest?access_key=de6eadb86fed44e838f176a29c2d1f24&format=1').then((response) => {
//     const euro = 1 / response.data.rates[from];
//     const rate = euro * response.data.rates[to];
//     return rate;
//   });
// };

const getExchangeRate = async (from, to) => {
  try {
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=de6eadb86fed44e838f176a29c2d1f24&format=1')
    const euro = 1 / response.data.rates[from];
    const rate = euro * response.data.rates[to];

    if (isNaN(rate)) {
      throw new Error();
    }
    return rate;
  } catch (e) {
    throw new Error(`Unable to get exchange rate for ${from} and ${to}.`)
  }

};

// const getCountries = (currencyCode) => {
//   return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((res) => {
//     return res.data.map((country) => country.name);
//   });
// };

const getCountries = async (currencyCode) => {
  try {
    const res = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
      return res.data.map((country) => country.name);
  } catch (e) {
    throw new Error(`Unable to get countries that use ${currencyCode}.`)
  }
};

// const convertCurrency = (from, to, amount) => {
//   let convertedAmount;
// return getExchangeRate(from, to).then((rate) => {
//     convertedAmount = (amount * rate).toFixed(2);
//     return getCountries(to);
//   }).then((country) => {
//     return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in the following countries: ${country.join(', ')}`;
//   });
// };

const convertCurrency = async (from, to, amount) => {
  const rate = await getExchangeRate(from, to);
  const countries = await getCountries(to);
  const convertedAmount = (amount * rate).toFixed(2);
  return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in the following countries: ${countries.join(', ')}`;
};

convertCurrency('USD', 'MXN', 20).then((message) => {
  console.log(message);
}).catch((e) => {
  console.log(e.message)
});

// const add = async (a, b) => a + b + d;
//
// const doWork = async () => {
//   try {
//     const result = await add(12, 13)
//     return result;
//   } catch (e) {
//     return 10
//   }
//
// };
//
// doWork().then((data) =>{
//   console.log(data);
// }).catch((e) => {
//   console.log('something went wrong');
// });
// getExchangeRate('USD', 'MXN').then((rate) => {
//   console.log(rate);
// });
//
// getCountries('USD').then((country) => {
//   console.log(country)
// });
