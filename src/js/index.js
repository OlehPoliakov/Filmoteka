import renderMarkupMovieCards from './templates/movie-card';
import '../js/services/theMovieAPI';
import TheMovieAPI from '../js/services/theMovieAPI';
const theMovieAPI = new TheMovieAPI();
const gallery = document.querySelector('.movie-cards__list');
const formRef = document.querySelector('#search-form');

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const options = {
  totalItems: 0,
  itemsPerPage: 5,
  visiblePages: 5,
  page: 1,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination('pagination', options);
let page = 1;

// async function theMovieApiRender() {
//   try {
//     const { results, total_pages: total } = await theMovieAPI.fetchMovies(page);
//     pagination.reset(total);
//     gallery.innerHTML = '';
//     renderMarkupMovieCards(results);
//   } catch (error) {}
// }
function theMovieApiRender() {
  theMovieAPI.fetchMovies(page).then(({ results, total_pages: total }) => {
    pagination.reset(total);
    gallery.innerHTML = '';
    renderMarkupMovieCards(results);
  });
}
theMovieApiRender();
theMovieAPI.fetchGenres();

export async function fetchDataFilms(event) {
  const currentPage = event.page;

  try {
    const { results } = await theMovieAPI.fetchMovies(currentPage);
    gallery.innerHTML = '';
    renderMarkupMovieCards(results);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } catch (error) {}
}
pagination.on('afterMove', fetchDataFilms);

// import renderMarkupMovieCards from './templates/movie-card';
// import '../js/services/theMovieAPI';
// import TheMovieAPI from '../js/services/theMovieAPI';
// // import infiniteObserver from './services/infinityScroll';
// const theMovieAPI = new TheMovieAPI();

// async function theMovieApiRender() {
//   try {
//     const { results } = await theMovieAPI.fetchMovies(1);

//     const lastCard = document.querySelector('.movie-card__item:last-child');
//     if (lastCard) {
//       infiniteObserver.observe(lastCard);
//     }
//     renderMarkupMovieCards(results);
//   } catch (error) {}
// }
// theMovieApiRender();
// theMovieAPI.fetchGenres();
