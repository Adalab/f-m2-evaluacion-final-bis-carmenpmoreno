'use strict';

console.log('>> Ready :)');

// 1. Escuchar el click sobre el container del input y añadirle la clase select__option-checked

// recojo todos los container del input y creo un array
const inputContainers = document.querySelectorAll('.select__option-container');
console.log(inputContainers);
// le pongo a cada uno un listener
for (const inputContainerEl of inputContainers) {
  inputContainerEl.addEventListener('click', handleInputClick);
}
// función handler sobre cada uno
function handleInputClick(event) {
  // console.log(event); se hac un evento por el click del radio y otro por mi adEventListener
  if (event.currentTarget.classList.contains('selected')) {
    event.currentTarget.classList.remove('selected');
    const innerHtmlEvent = event.currentTarget;
    console.log(innerHtmlEvent);
      //  + 'deseleccionado');
  }
  else {
    event.currentTarget.classList.add('selected');
    console.log('seleccionado');
  }
}

//   <ul class="cards-list"></ul>
//   <li class="cards-list__item"></li>
