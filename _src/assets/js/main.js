'use strict';

console.log('>> Ready :)');

// Escuchar el click sobre el container del input y añadirle la clase select__option-checked
const inputContainers = document.querySelectorAll('.select__option-container');

for (const inputContainerEl of inputContainers) {
  inputContainerEl.addEventListener('clik', handleInputClick);
}

function handleInputClick(event) {
  event.currentTarget.classList.add('selected');
}

//   <ul class="cards-list"></ul>
//   <li class="cards-list__item"></li>
