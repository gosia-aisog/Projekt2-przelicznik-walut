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

fetch("http://api.nbp.pl/api/exchangerates/tables/a/?format=json")
  .then((response) => response.json())
  .then((data) => console.log(data[0].rates))
  .catch((err) => console.error(err));
