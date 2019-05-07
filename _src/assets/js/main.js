'use strict';

const inputContainers = document.querySelectorAll('.select__option-container');
const buttonEl = document.querySelector('.btn');
const mainSection = document.querySelector('.main-section');
const savedValue = JSON.parse(localStorage.getItem('value'));

for (let i = 0; i < inputContainers.length; i++) {
  if (inputContainers[i].children[0].value === savedValue) {
    inputContainers[i].classList.add('check');
    inputContainers[i].children[0].classList.add('input-checked');
  }
}

for (const inputContainerEl of inputContainers) {
  inputContainerEl.addEventListener('click', handleInputClick);
}
function handleInputClick(event) {
  if (!event.currentTarget.classList.contains('check')) {
    for (let i = 0; i < inputContainers.length; i++) {
      inputContainers[i].classList.remove('check');
      inputContainers[i].children[0].classList.remove('input-checked');
    }
    event.currentTarget.classList.add('check');
    event.currentTarget.children[0].classList.add('input-checked');
    const inputChecked = document.querySelector('.input-checked');
    const value = inputChecked.value;
    localStorage.setItem('value', JSON.stringify(value));
  }
}

buttonEl.addEventListener('click', handleButtonClick);
function handleButtonClick() {
  const inputChecked = document.querySelector('.input-checked');
  const value = inputChecked.value;
  fetch(`https://raw.githubusercontent.com/Adalab/cards-data/master/${inputChecked.value}.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      printCards(value, data);
    });
}

function printCards(value, data) {
  mainSection.innerHTML = '<ul class="cards"></ul>';
  const cardsList = document.querySelector('.cards');
  const backImage = '<img src="https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB" alt="trasera de la carta" class="back-image"/>';
  for (let i = 0; i < value; i++) {
    cardsList.innerHTML += '<li class="card"></li>';
    const cards = document.querySelectorAll('.card');
    let frontImage = `<img src="${data[i].image}" alt="${data[i].name}" class="front-image hidden"/>`;
    cards[i].innerHTML = backImage + frontImage;
  }
  const cards = document.querySelectorAll('.card');
  listenerOnCards(cards);
}

function listenerOnCards(cards) {
  for (const card of cards) {
    card.addEventListener('click', handleCardsClick);
  }
}
function handleCardsClick(event) {
  for (let i = 0; i < event.currentTarget.children.length; i++) {
    event.currentTarget.children[i].classList.toggle('hidden');
  }
}
