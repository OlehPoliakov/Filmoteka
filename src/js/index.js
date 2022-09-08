import renderMarkupMovieCards from './templates/movie-card';
import '../js/services/theMovieAPI';
import TheMovieAPI from '../js/services/theMovieAPI';
// import infiniteObserver from './services/infinityScroll';
const theMovieAPI = new TheMovieAPI();

async function theMovieApiRender() {
  try {
    const { results } = await theMovieAPI.fetchMovies(1);

    const lastCard = document.querySelector('.movie-card__item:last-child');
    if (lastCard) {
      infiniteObserver.observe(lastCard);
    }
    renderMarkupMovieCards(results);
  } catch (error) {}
}
theMovieApiRender();
theMovieAPI.fetchGenres();
