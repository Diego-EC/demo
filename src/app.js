/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

// 2º capturar evento click del botón
document.querySelector("#drawCards").addEventListener("click", e => {
  e.preventDefault();
  console.log("click drawCards");

  // 1º capturar el numero de cartas a generar desde el input
  let amountOfCards = document.querySelector("#amountOfCards").value;
  console.log(amountOfCards);
  generateRandomCards(amountOfCards);
});

// 3º metodo de gerar cartas aleatorias (función)
function generateRandomCards(amountOfCards) {
  let hand = document.querySelector("#hand");
  hand.innerHTML = "";
  // 4º gererar cartas aleatorias (bucle)
  for (let i = 0; i < amountOfCards; i++) {
    let cardElement = document.createElement("div");
    cardElement.innerHTML = "CARTA" + i;
    hand.appendChild(cardElement);
  }
}
