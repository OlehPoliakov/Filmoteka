import TheMovieAPI from './theMovieAPI';
import { theMovieAPI } from './movieSearch';

const gallery = document.querySelector('.movie-cards__list');
const modalRef = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');
const modalCloseBtn = document.querySelector('.btn-close');
const body = document.querySelector('body');

const renderDetails = e => {
  const idEl = e.target.closest('li').id;
  theMovieAPI.fetchDetails(idEl).then(res => {
    renderFilm(res);
  });
};

gallery.addEventListener('click', renderDetails);

const renderFilm = ({
  id,
  poster_path,
  original_title,
  genres,
  vote_average,
  popularity,
  overview,
  vote_count,
}) => {
  const genre =
    genres.map(id => id.name).join(', ') || 'Genres are not specified';

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : '';

  const getWatched = localStorage.getItem('watched') ?? '[]';
  const parseWatched = JSON.parse(getWatched);
  const isInWatched = parseWatched.some(movie => movie.id === id);

  const getQueue = localStorage.getItem('queue') ?? '[]';
  const parseQueue = JSON.parse(getQueue);
  const isInQueue = parseQueue.some(movie => movie.id === id);

  const markup = `<li id='${id}' class="movies__item">
  <img class="movie-modal__img" src="${poster}" alt="${original_title}">
    <div class="movies__wrapper">
        <h2 class="movie-modal__name">${original_title}</h2>
        <div class="movies__wrapper--data">
            <table class="movie-modal__table">
                        <tr>
                            <td class="movie-modal__text">Vote / Votes</td>
                            <td class="movie-modal__numbers"><span class="movie-modal__vote">${vote_average} </span> / <span class="movie-modal__votes">${vote_count}</span></td>
                        </tr>
                        <tr>
                            <td class="movie-modal__text">Popularity</td>
                            <td class="movie-modal__numbers">${popularity}</td>
                        </tr>
                    
                        <tr>
                            <td class="movie-modal__text">Original Title</td>
                            <td class="movie-modal__numbers">${original_title}</td>
                        </tr>
                        <tr>
                            <td class="movie-modal__text">Genre</td>
                            <td class="movie-modal__numbers">${genre}</td>
                        </tr>
                    </table>

           
            <article class="movie-modal__article">
            <p class="movie-overview__title">ABOUT</p>
            <p class="movie-overview__text">${overview}</p>
            </article>
            <button class='btn-watched' data-btnModal="watched">${
              isInWatched ? 'Remove from watched' : 'add to Watched'
            }</button>
            <button class='btn-queue' data-btnModal="queue">${
              isInQueue ? 'Remove from queue' : 'add to queue'
            }</button>
            </div>
        </div>
    </li>`;
  modalInner.insertAdjacentHTML('afterbegin', markup);
  modalRef.classList.add('is-open');
  document.addEventListener('keydown', handleEscClose);
};

function handleModalClose() {
  modalRef.classList.remove('is-open');
  modalInner.innerHTML = '';
  document.removeEventListener('keydown', handleEscClose);
}

function handleEscClose(e) {
  if (e.key === 'Escape') {
    document.removeEventListener('keydown', handleEscClose);
    handleModalClose();
  }
}
modalCloseBtn.addEventListener('click', handleModalClose);

function handleCloseToBackdrop(e) {
  if (e.target.className === 'modal is-open') {
    handleModalClose();
  }
}
modalRef.addEventListener('click', handleCloseToBackdrop);

const getFilms = localStorage.getItem('films');
const parsedFilms = JSON.parse(getFilms);

const getQueue = localStorage.getItem('queue');
const getQueueParse = JSON.parse(getQueue);
const arrQueue = getQueueParse ?? [];

const getWathed = localStorage.getItem('watched');
const getWathcParse = JSON.parse(getWathed);
const arrWatched = getWathcParse ?? [];

function test(e) {
  const idEl = e.target.closest('li').id;
  if (e.target.className === 'btn-watched') {
    const btnLibraryWatch = document.querySelector('[data-btnModal="watched"]');

    const filmById = parsedFilms.find(el => el.id === Number(idEl));
    if (!filmById) {
      return;
    }
    const watchedFilmIndex = arrWatched.findIndex(
      item => item.id === filmById.id
    );
    if (watchedFilmIndex === -1) {
      btnLibraryWatch.textContent = 'Remove from watched';
      arrWatched.push(filmById);
    } else {
      btnLibraryWatch.textContent = 'add to Watched';
      arrWatched.splice(watchedFilmIndex, 1);
    }

    localStorage.setItem('watched', JSON.stringify(arrWatched));
  }

  if (e.target.className === 'btn-queue') {
    const btnQueue = document.querySelector('[data-btnModal="queue"]');

    const filmById = parsedFilms.find(el => el.id === Number(idEl));
    if (!filmById) {
      return;
    }
    const watchedFilmIndex = arrQueue.findIndex(
      item => item.id === filmById.id
    );
    if (watchedFilmIndex === -1) {
      btnQueue.textContent = 'Remove from queue';
      arrQueue.push(filmById);
    } else {
      btnQueue.textContent = 'Add to queue';
      arrQueue.splice(watchedFilmIndex, 1);
    }

    localStorage.setItem('queue', JSON.stringify(arrQueue));
  }
}
modalInner.addEventListener('click', test);
