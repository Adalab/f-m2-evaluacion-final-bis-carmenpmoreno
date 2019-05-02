'use strict';

console.log('>> Ready :)');

// 1. Escuchar el click sobre el container del input y añadirle la clase select__option-checked

const inputContainers = document.querySelectorAll('.select__option-container');

for (const inputContainerEl of inputContainers) {
  inputContainerEl.addEventListener('click', handleInputClick);
}

function handleInputClick(event) {
changeColor(event);

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
    console.log('seleccionado');
  }
}


//   <ul class="cards-list"></ul>
//   <li class="cards-list__item"></li>
