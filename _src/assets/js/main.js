/* eslint-disable no-inner-declarations */
'use strict';

console.log('>> Ready :)');

// 1. Escuchar al click sobre el input y añadirle clase input-checked. Además, evitamos que cuando seleccionemos otro, se quede el anterior imput seleccionado

const inputContainers = document.querySelectorAll('.select__option-container');
const buttonEl = document.querySelector('.btn');
const backCardsList = document.querySelector('.back-cards');
const frontCardsList = document.querySelector('.front-cards');

for (const inputContainerEl of inputContainers) {
  inputContainerEl.addEventListener('click', handleInputClick);
}

function handleInputClick(event) {
  if (event.currentTarget.classList.contains('check')) {
    event.currentTarget.classList.remove('check');
  } else {
    for (let i = 0; i < inputContainers.length; i++) {
      inputContainers[i].classList.remove('check');
    }
    event.currentTarget.classList.add('check');
    event.currentTarget.children[0].classList.add('input-checked');
  }
}

// 2. Escuchar el click sobre el botón y pintar las cartas traseras y delanteras

buttonEl.addEventListener('click', handleButtonClick);

function handleButtonClick() {
  const inputChecked = document.querySelector('.input-checked');
  const value = inputChecked.value;
  const backImage =
    '<img src="https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB" alt="trasera de la carta" class="back-image"/>';
  printBackCards(backImage, value);
  fetch(
    `https://raw.githubusercontent.com/Adalab/cards-data/master/${
      inputChecked.value
    }.json`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      printFrontCards(data);
    });
}

function printBackCards(image, value) {
  for (let i = 0; i < value; i++) {
    backCardsList.innerHTML += '<li class="back-card"></li>';
    const backCardsItems = document.querySelectorAll('.back-card');
    backCardsItems[i].innerHTML = image;
    // 4. Interacción para dar la vuelta a la carta
    // escuchar el click sobre la carta trasera
    clickBackCard(backCardsItems);
  }
}
function printFrontCards(data) {
  for (let i = 0; i < data.length; i++) {
    frontCardsList.innerHTML += '<li class="front-card hidden"></li>';
    const frontCardsItems = document.querySelectorAll('.front-card');
    let pokemonImages = `<img src="${data[i].image}" alt="${
      data[i].name
    }" class="front-image"/>`;
    frontCardsItems[i].innerHTML = pokemonImages;
  }
}
// 3. Guardar el número de cartas pedidas en el Local Storage
// ...TO DO!!

function clickBackCard(backCardsItems) {
  for (const backCardItem of backCardsItems) {
    backCardItem.addEventListener('click', handleBackCardClick);
  }
  function handleBackCardClick(event) {
    console.log('click sobre la carta trasera');
    event.currentTarget.classList.add('hidden');
  }
}

// se oculta la back-card y se ve la front-card
