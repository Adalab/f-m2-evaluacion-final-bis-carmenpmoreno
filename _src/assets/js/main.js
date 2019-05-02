'use strict';

console.log('>> Ready :)');

// 1. Escuchar al click sobre el input y añadirle clase input-checked. Además, evitamos que cuando seleccionemos otro, se quede el anterior imput seleccionado

const inputContainers = document.querySelectorAll('.select__option-container');

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

const buttonEl = document.querySelector('.btn');
const ulEl = document.querySelector('.cards-list');

buttonEl.addEventListener('click', handleButtonClick);
function handleButtonClick() {
  const inputChecked = document.querySelector('.input-checked');
  for(let i=0; i<inputChecked.value; i++) {
    console.log('print cards');
    printBackCards();
    // investigar como puedo ejecutar la función tantas veces como mi inputChecked.value!!
  }
  fetch(`https://raw.githubusercontent.com/Adalab/cards-data/master/${inputChecked.value}.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      console.log(data);
    });
}

function printBackCards() {
  // intento de DOM elegante:
    // const itemList = document.createElement('li');
    // const imgEl = document.createElement('img');
    // itemList.appendChild(imgEl);
    // console.log(itemList);
  ulEl.innerHTML = '<li class="card"></li>';
  const liEl = document.querySelector('.card');
  liEl.innerHTML = '<img src="https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB" alt="trasera de la carta"/>';
}
