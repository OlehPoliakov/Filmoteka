// import TheMovieAPI from './theMovieAPI';
// import { theMovieAPI } from './movieSearch';
// import renderMarkupMovieCards from '../templates/movie-card';

// const infiniteObserver = new IntersectionObserver(
//   ([entry], observer) => {
//     if (entry.isIntersecting) {
//       observer.unobserve(entry.target);
//       loadMoreContent();
//     }
//   },
//   {
//     threshold: 0.7,
//   }
// );
// export default infiniteObserver;

// async function loadMoreContent() {
//   theMovieAPI.incrementPage();

//   try {
//     const { results } = theMovieAPI.query
//       ? await theMovieAPI.fetchSearchMovies()
//       : await theMovieAPI.fetchMovies();
//     renderMarkupMovieCards(results);
//   } catch (error) {}
// }
