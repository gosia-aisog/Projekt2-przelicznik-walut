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

//GET data:
fetch("http://api.nbp.pl/api/exchangerates/tables/a/?format=json")
  .then((response) => response.json())
  .then((data) => {
    let currencies = data[0].rates;
    console.log(currencies);
  })
  .catch((err) => console.error(err));

selectDOM.addEventListener("change", (e) => {
  e.preventDefault();
  const chosenCurrencyCode = e.target.value;
  console.log(chosenCurrencyCode);
});

//wunkcja wyciągająca z inputa wartość podaną przez użytkownika
let getValue;
inputDOM.addEventListener("input", (e) => {
  e.preventDefault();
  const getValue = e.target.value;
  console.log(getValue);
});

// btnDOM.addEventListener("click", converterFunction);

// converterFunction = () => {};
