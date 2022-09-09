const formRef = document.querySelector('#search-form');

import TheMovieAPI from './theMovieAPI';
import renderMarkupMovieCards from '../templates/movie-card';
import { fetchDataFilms } from '..';
// import { loadMoreContent } from './infinityScroll';
export const theMovieAPI = new TheMovieAPI();
const gallery = document.querySelector('.movie-cards__list');
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

async function handleSubmit(event) {
  event.preventDefault();
  const { query } = event.currentTarget.elements;
  const inputValue = query.value.trim();
  if (!inputValue) {
    console.log('Введіть дані для пошуку');
    return;
  }

  theMovieAPI.query = inputValue;
  pagination.off('afterMove', fetchDataFilms);
  pagination.off('afterMove', handleMoreClick);
  pagination.on('afterMove', handleMoreClick);

  try {
    const { results, total_pages: total } = await theMovieAPI.fetchSearchMovies(
      page
    );
    if (results.length === 0) {
      alert('введіть дані для пошуку');
      return;
    }
    if (total === 0) {
      return;
    }
    pagination.reset(total);
    gallery.innerHTML = '';
    renderMarkupMovieCards(results);
    loadMoreContent();
  } catch (error) {}
}
formRef.addEventListener('submit', handleSubmit);

async function handleMoreClick(event) {
  const currentPage = event.page;

  try {
    const { results } = await theMovieAPI.fetchSearchMovies(currentPage);
    gallery.innerHTML = '';
    renderMarkupMovieCards(results);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } catch (error) {}
}

// async function loadMoreContent() {
//   theMovieAPI.incrementPage();

//   try {
//     const { results } = theMovieAPI.query
//       ? await theMovieAPI.fetchSearchMovies()
//       : await theMovieAPI.fetchMovies();
//     renderMarkupMovieCards(results);
//   } catch (error) {}
// }

// const formRef = document.querySelector('#search-form');

// import TheMovieAPI from './theMovieAPI';
// import renderMarkupMovieCards from '../templates/movie-card';
// // import { loadMoreContent } from './infinityScroll';
// export const theMovieAPI = new TheMovieAPI();
// const gallery = document.querySelector('.movie-cards__list');

// let page = 1;

// async function handleSubmit(e) {
//   e.preventDefault();
//   theMovieAPI.resetPage();

//   const { query } = e.currentTarget.elements;
//   const inputValue = query.value.trim();
//   if (!inputValue) {
//     alert('введіть дані для пошуку');
//     return;
//   }

//   theMovieAPI.query = inputValue;
//   try {
//     const { results } = await theMovieAPI.fetchSearchMovies(page);
//     if (results.length === 0) {
//       alert('введіть дані для пошуку');
//       return;
//     }
//     gallery.innerHTML = '';
//     renderMarkupMovieCards(results);
//     loadMoreContent();
//   } catch (error) {}
// }

// formRef.addEventListener('submit', handleSubmit);
