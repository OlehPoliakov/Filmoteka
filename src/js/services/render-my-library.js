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

const btnLibraryWatch = document.querySelector('.library-watched');
const btnLibraryQueue = document.querySelector('.library-queue');

ref.libraryBtn.addEventListener('click', onHandleBtnClick);

import renderMarkupMovieCards from '../templates/movie-card';
const paginationRef = document.querySelector('#pagination');

function onHandleBtnClick(e) {
  const getWathed = localStorage.getItem('watched');
  const wathedPArse = JSON.parse(getWathed) ?? [];

  const getQueue = localStorage.getItem('queue') ?? '[]';
  const parseQueue = JSON.parse(getQueue);

  if (ref.libraryBtn.classList.contains('current')) {
    paginationRef.classList.add('is-hidden');
    if (wathedPArse.length === 0) {
      ref.gallery.innerHTML = renderEmptyLibrary();
      return;
    }

    btnLibraryWatch.classList.add('btn-js-active');
    renderMarkupMovieCards(wathedPArse, true);

    btnLibraryWatch.addEventListener('click', e => {
      e.target.classList.add('btn-js-active');
      btnLibraryQueue.classList.remove('btn-js-active');
      renderMarkupMovieCards(wathedPArse, true);
    });

    btnLibraryQueue.addEventListener('click', e => {
      e.target.classList.add('btn-js-active');
      btnLibraryWatch.classList.remove('btn-js-active');
      renderMarkupMovieCards(parseQueue, true);
    });
  }
}



// import { ref } from './switch-home-library';
// function renderEmptyLibrary() {
//   return `<div class='container content__library'>
//           <div class='content__library-container'>
//           <img  class='content__library__img' src='https://assets.bigcartel.com/product_images/228233459/PikachuMeme.png?auto=format&fit=max&w=1500' loading='lazy' alt='pikachu' width="400" height="400"/>
//           </div>
//           <div class='content__library-ref'>
//           <h2 class='content__library-title'>Ooops... nothing was selected!</h2>
//           <p class='content__library__text'>
//           <a class='content__library-link' href='./index.html'>Go back</a> and choose movie you want to watch.</p>
//           </div>
//           </div>`;
// }

// const btnLibraryWatch = document.querySelector('.library-watched');
// const btnLibraryQueue = document.querySelector('.library-queue');

// ref.libraryBtn.addEventListener('click', onHandleBtnClick);

// import renderMarkupMovieCards from '../templates/movie-card';

// function onHandleBtnClick(e) {
//   const getWathed = localStorage.getItem('watched');
//   const wathedPArse = JSON.parse(getWathed) ?? [];

//   const getQueue = localStorage.getItem('queue') ?? '[]';
//   const parseQueue = JSON.parse(getQueue);

//   if (ref.libraryBtn.classList.contains('current')) {
//     if (wathedPArse.length === 0) {
//       ref.gallery.innerHTML = renderEmptyLibrary();
//       return;
//     }

//     btnLibraryWatch.classList.add('btn-js-active');
//     renderMarkupMovieCards(wathedPArse, true);

//     btnLibraryWatch.addEventListener('click', e => {
//       e.target.classList.add('btn-js-active');
//       btnLibraryQueue.classList.remove('btn-js-active');
//       renderMarkupMovieCards(wathedPArse, true);
//     });

//     btnLibraryQueue.addEventListener('click', e => {
//       e.target.classList.add('btn-js-active');
//       btnLibraryWatch.classList.remove('btn-js-active');
//       renderMarkupMovieCards(parseQueue, true);
//     });
//   }
// }
