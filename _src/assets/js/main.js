'use strict';

console.log('>> Ready :)');

// 1. Escuchar al click sobre el input

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

const buttonEl = document.querySelector('.btn');

// 2. Escuchar el click sobre el botón de comenzar
buttonEl.addEventListener('click', handleButtonClick);
// función que maneje el click del botón y haga petición de data en función del input seleccionado
function handleButtonClick() {
// hacer una petición al servidor con el número indicado en el value del input que tenga la clase input-checked
  const inputChecked = document.querySelector('.input-checked');
  console.log(inputChecked.value);
  fetch(`https://raw.githubusercontent.com/Adalab/cards-data/master/${inputChecked.value}.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      console.log(data)
    });
  
}

