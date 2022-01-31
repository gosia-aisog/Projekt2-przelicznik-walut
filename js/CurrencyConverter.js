//STATE
//UPDATE <FUNCS>
//VIEW (UI)
//EVENTS

//STATE->VIEW (show view+state)np. renderIncomes
//EVENT -> STATE ->UPDATE ->NEW STATE -> VIEW (view+newState)
// https://staltz.com/img/mvu-unidir-ui-arch.jpg

const qs = (selector) => document.querySelector(selector);

//DOM Elements:
const btnDOM = qs("#convert");
const selectDOM = qs("#choice");
const formDOM = qs("#form-id");
const inputDOM = qs("#input-value");
const containerDOM = qs("#container");
const resultDOM = qs("#result");

let currencies;
let resultAction;

let midCurrency;

//functions
const chosenCurrencyMid = (currencies, chosenCurrencyCode) => {
  return currencies.find(({ code }) => code === chosenCurrencyCode).mid;
};

const converterFunction = (getValue, midCurrency) => {
  const resultAction = Number(getValue * midCurrency);
  console.log(getValue * midCurrency);
  console.log(resultAction);
  resultDOM.innerHTML = resultAction;
};

//GET data z API:
fetch("http://api.nbp.pl/api/exchangerates/tables/a/?format=json")
  .then((response) => response.json())
  .then((data) => {
    currencies = data[0].rates;
    console.log(currencies);
    console.log(typeof currencies);
  })
  .catch((err) => console.error(err));

// wybranie waluty przez uzytkownika
//i znalezienie dla niej wartości
selectDOM.addEventListener("change", (e) => {
  e.preventDefault();
  const midCurrency = chosenCurrencyMid(currencies, e.target.value);
  console.log(midCurrency);
  console.log(typeof midCurrency);
});

//funkcja wyciągająca z inputa wartość podaną przez użytkownika
let getValue;
inputDOM.addEventListener("input", (e) => {
  e.preventDefault();
  const getValue = Number(e.target.value);
  console.log(getValue);
  console.log(typeof getValue);
});

btnDOM.addEventListener("click", (e) => {
  e.preventDefault();
  converterFunction();
});
