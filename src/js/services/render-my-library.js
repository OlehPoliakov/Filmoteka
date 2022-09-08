import { ref } from './switch-home-library';

function renderEmptyLibrary() {
  return `<div class='container content__library'>
          <div class='content__library-container'>
          <img  class='content__library__img' src='https://i.imgur.com/3afQVRr.png' loading='lazy' alt='pikachu' width="350" height="350"/>
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

import renderMarkupMovieCards from '../templates/movie-card';
// import infiniteObserver from './infinityScroll';
// const getWathed = localStorage.getItem('watched');
// const wathedPArse = JSON.parse(getWathed) ?? [];
// const updateMovies = [...wathedPArse, ]

function onHandleBtnClick() {
  const getWathed = localStorage.getItem('watched');
  const wathedPArse = JSON.parse(getWathed) ?? [];
  if (ref.libraryBtn.classList.contains('current')) {
    // ref.gallery.innerHTML = '';
    // infiniteObserver.disconnect();
    console.log('~ wathedPArse', wathedPArse);

    renderMarkupMovieCards(wathedPArse, true);
    // console.log("~ markup", markup)
    // ref.gallery.innerHTML = markup;
    // console.log('~ wathedPArse', wathedPArse);

    // wathedPArse.forEach(el => {
    //   console.log("~ el", el)
    //   const objVal = Object.values(el);
    //   console.log("~ objVal", objVal)
    //   // ref.gallery.insertAdjacentHTML('beforebegin', element);
    //   // ref.gallery.innerHTML = renderMarkupMovieCards(el);
    // });
    // ref.gallery.innerHTML = '';
    // removeSelector.classList.remove('movie-cards__list');
  }

  // ref.gallery.innerHTML = renderEmptyLibrary();
}

// wathedPArse.forEach(element => {
//   console.log(element);
// });
