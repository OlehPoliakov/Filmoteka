import TheMovieAPI from './theMovieAPI';
import { theMovieAPI } from './movieSearch';

const gallery = document.querySelector('.movie-cards__list');
const modalRef = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');
const modalCloseBtn = document.querySelector('.btn-close');

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

  const markup = `<li id='${id}' class="movies__item">
    <img class="movies__img" src="${poster}" alt="${original_title}">
    <div class="movies__wrapper">
        <h2 class="movies__name">${original_title}</h2>
        <div class="movies__wrapper--data">

            <span class="movies__vote">Vote / Votes${vote_average} / ${vote_count}</span>
            <span class="movies__popularity">Popularity ${popularity}</span>
            <span class="movies__genre">Original Title ${original_title}</span>
            <span class="movies__genre">Genre ${genre}</span>
            <p>ABOUT</p>
            <p>${overview}</p>
            <button class='btn-watched' data-btnModal="watched">add to Watched</button>
            <button data-btnModal="queue">add to queue</button>
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

const ar = localStorage.getItem('films');
const parsedAr = JSON.parse(ar);

const getWathed = localStorage.getItem('watched');
const getWathcParse = JSON.parse(getWathed);
const arr = getWathcParse ?? [];

function test(e) {
  const idEl = e.target.closest('li').id;
  if (e.target.className === 'btn-watched') {
    parsedAr.find(el => {
      if (el.id === Number(idEl)) {
        if (arr.find(item => item.id === el.id)) {
          return;
        }
        arr.push(el);
      }
    });
    localStorage.setItem('watched', JSON.stringify(arr));
  }
}
modalInner.addEventListener('click', test);
