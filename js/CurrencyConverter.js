//STATE
//UPDATE <FUNCS>
//VIEW (UI)
//EVENTS

//STATE->VIEW (show view+state)np. renderIncomes
//EVENT -> STATE ->UPDATE ->NEW STATE -> VIEW (view+newState)
// https://staltz.com/img/mvu-unidir-ui-arch.jpg

const qs = (selector) => document.querySelector(selector);

//DOM Elements:

const formDOM = qs("#form-id");
const resultDOM = qs("#result");

//functions
const chosenCurrencyMid = (currencies, chosenCurrencyCode) => {
  return currencies.find(({ code }) => code === chosenCurrencyCode).mid;
};

const converterFunction = (getValue, midCurrency) => {
  const resultAction = (getValue * midCurrency).toFixed(6);
  console.log(getValue * midCurrency);
  console.log(resultAction);
  resultDOM.innerHTML = ` ${resultAction}  &nbsp PLN`;
};

//GET data z API:
fetch("http://api.nbp.pl/api/exchangerates/tables/a/?format=json")
  .then((response) => response.json())
  .then((data) => {
    currencies = data[0].rates;
    console.log(currencies);
    console.log(typeof currencies);

    formDOM.addEventListener("submit", (e) => {
      e.preventDefault();
      const { amount, currency } = e.currentTarget.elements;
      const amountValue = Number(amount.value);
      const currencyValue = chosenCurrencyMid(currencies, currency.value);
      converterFunction(amountValue, currencyValue);
    });
  })
  .catch((err) => console.error(err));
