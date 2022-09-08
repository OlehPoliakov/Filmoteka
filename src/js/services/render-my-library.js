import { ref } from './switch-home-library';

function renderEmptyLibrary() {
  return `<div class='container content__library'>
          <div class='content__library-container'>
          <img  class='content__library__img' src='https://assets.bigcartel.com/product_images/228233459/PikachuMeme.png?auto=format&fit=max&w=1500' loading='lazy' alt='pikachu' width="400" height="400"/>
          </div>
          <div class='content__library-ref'>
          <h2 class='content__library-title'>Ooops... nothing was selected!</h2>
          <p class='content__library__text'>
          <a class='content__library-link' href='./index.html'>Go back</a> and choose movie you want to watch.</p>
          </div>
          </div>`;
}

const removeSelector = document.querySelector('.movie-cards__list');

ref.libraryBtn.addEventListener('click', onHandleBtnClick);

function onHandleBtnClick() {
  if (ref.libraryBtn.classList.contains('current')) {
    ref.gallery.innerHTML = '';
    removeSelector.classList.remove('movie-cards__list');
  }

  ref.gallery.innerHTML = renderEmptyLibrary();
}
