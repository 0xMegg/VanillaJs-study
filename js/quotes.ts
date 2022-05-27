const quotes = [
  {
    quote: "a",
    author: "A",
  },
  {
    quote: "b",
    author: "B",
  },
  {
    quote: "c",
    author: "C",
  },
  {
    quote: "d",
    author: "D",
  },
  {
    quote: "e",
    author: "E",
  },
  {
    quote: "f",
    author: "F",
  },
  {
    quote: "g",
    author: "G",
  },
  {
    quote: "h",
    author: "H",
  },
  {
    quote: "i",
    author: "I",
  },
  {
    quote: "j",
    author: "J",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const chosenQuote = quotes[Math.trunc(Math.random() * quotes.length)];

quote.innerText = chosenQuote.quote;
author.innerText = chosenQuote.author;
