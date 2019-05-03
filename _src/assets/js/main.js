/* eslint-disable no-inner-declarations */
'use strict';

console.log('>> Ready :)');

// 1. Escuchar al click sobre el input y añadirle clase input-checked. Además, evitamos que cuando seleccionemos otro, se quede el anterior imput seleccionado

const inputContainers = document.querySelectorAll('.select__option-container');
const buttonEl = document.querySelector('.btn');
const backCards = document.querySelector('.back-cards');
const frontCards = document.querySelector('.front-cards');

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
  const backImage =
    '<img src="https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB" alt="trasera de la carta"/>';
  const value = inputChecked.value;
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
      for (let i = 0; i < data.length; i++) {
        function printFrontCards() {
          frontCards.innerHTML += '<li class="card"></li>';
          const Cards = document.querySelectorAll('.card');
          let pokemonImages = `<img src="${data[i].image}" alt="${data[i].name}"/>`;
          console.log(pokemonImages);
          Cards[i].innerHTML = pokemonImages;
        }
        printFrontCards();
      }
    });
}

function printBackCards(image, value) {
  for (let i = 0; i < value; i++) {
    backCards.innerHTML += '<li class="card"></li>';
    const Cards = document.querySelectorAll('.card');
    Cards[i].innerHTML = image;
  }
}
