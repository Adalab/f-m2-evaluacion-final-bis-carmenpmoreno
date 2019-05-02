'use strict';

console.log('>> Ready :)');

// 1. Escuchar al click sobre el input
// 2.Crear 8 divs en el html, 4 encima y 4 debajo
// 3. 4 de ellos con la imagen de placeholder adalab: https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB

const inputContainers = document.querySelectorAll('.select__option-container');

for (const inputContainerEl of inputContainers) {
  inputContainerEl.addEventListener('click', handleInputClick);
}

function handleInputClick(event) {
changeColor(event);
// function selectCardsChoice (event) {
  
// }
}

function changeColor(event) {
  if (event.currentTarget.classList.contains('check')) {
    event.currentTarget.classList.remove('check');
  }
  else {
    for (let i=0; i<inputContainers.length; i++) {
      inputContainers[i].classList.remove('check');
    }
    event.currentTarget.classList.add('check');
    
  //   fetch()
  //   .then({

  //   })
  //   .then()
  }
}