import TheMovieAPI from './theMovieAPI';
import { theMovieAPI } from './movieSearch';

const gallery = document.querySelector('.movie-cards__list');
const modalRef = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');
const modalCloseBtn = document.querySelector('.btn-close');
const body = document.querySelector('body');

const renderDetails = e => {
  const idEl = e.target.closest('li').id;
  console.log('~ idEl', idEl);
  theMovieAPI.fetchDetails(idEl).then(res => {
    renderFilm(res);
  });
};

// document.body.style.overflow = 'hidden';

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
            <button class='btn-watched' data-btnModal="watched">add to Watched</button>
            <button class='btn-watched' data-btnModal="queue">add to queue</button>
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
}

function handleEscClose(e) {
  if (e.key === 'Escape') {
    handleModalClose();
  }
}
modalCloseBtn.addEventListener('click', handleModalClose);

