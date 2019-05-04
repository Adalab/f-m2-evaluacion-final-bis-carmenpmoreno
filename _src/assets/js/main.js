/* eslint-disable no-inner-declarations */
'use strict';

console.log('>> Ready :)');

// CONSTANTES
const inputContainers = document.querySelectorAll('.select__option-container');
const buttonEl = document.querySelector('.btn');
const mainSection = document.querySelector('.main-section');

// 1. Escuchar al click sobre el div de color del input y añadirle al imput de dentro la clase input-checked. Además, evitamos que cuando seleccionemos otro, se quede el anterior div de color del imput y el propio input seleccionado

for (const inputContainerEl of inputContainers) {
  inputContainerEl.addEventListener('click', handleInputClick);
}

function handleInputClick(event) {
  if (event.currentTarget.classList.contains('check')) {
    event.currentTarget.classList.remove('check');
  } else {
    for (let i = 0; i < inputContainers.length; i++) {
      inputContainers[i].classList.remove('check');
      inputContainers[i].children[0].classList.remove('input-checked');
    }
    event.currentTarget.classList.add('check');
    event.currentTarget.children[0].classList.add('input-checked');
  }
}

// 2. Escuchar el click sobre el botón y pintar las cartas traseras y delanteras en una misma lista

buttonEl.addEventListener('click', handleButtonClick);

function handleButtonClick() {
  const inputChecked = document.querySelector('.input-checked');
  const value = inputChecked.value;
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
      printCards(value, data);
    });
}

function printCards(value, data) {
  mainSection.innerHTML = '<ul class="cards"></ul>';
  const cardsList = document.querySelector('.cards');
  const backImage =
    '<img src="https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB" alt="trasera de la carta" class="back-image"/>';
  for (let i = 0; i < value; i++) {
    cardsList.innerHTML += '<li class="card"></li>';
    const cards = document.querySelectorAll('.card');
    let frontImage = `<img src="${data[i].image}" alt="${
      data[i].name
    }" class="front-image hidden"/>`;
    console.log(frontImage);

    cards[i].innerHTML = backImage + frontImage;
  }
}
// 3. Guardar el número de cartas pedidas en el Local Storage
// ...TO DO!!

// 4. Interacción para dar la vuelta a la carta

// escuchar el click sobre las imágenes de las cartas
backImage.addEventListener('click', handleImagesClick);
frontImage.addEventListener('click', handleImagesClick);

function handleImagesClick(event) {
  console.log('ocultar la carta trasera');
  event.currentTarget.classList.toggle('hidden');
}

// se oculta la back-card y se ve la front-card
