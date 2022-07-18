export const API_KEY = process.env.REACT_APP_API_KEY;
export const MOVIE_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=PAGE_TERM&with_watch_monetization_types=flatrate`;
export const SEARCH_MOVIE_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=QUERY_TERM&page=PAGE_TERM`;
export const GET_MOVIE_API = `https://api.themoviedb.org/3/movie/ID_TERM?api_key=${API_KEY}&language=en-US`;
export const POSTER_API = 'https://image.tmdb.org/t/p/w1280/';
export const POSTER_PLACEHOLDER = 'https://fanart369.com/wp-content/themes/barberry/images/placeholder.jpg';