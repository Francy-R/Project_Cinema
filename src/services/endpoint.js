const URL_API = "https://api.themoviedb.org/3/movie/";
const KEY_API = "36fb035d3c16e181f85cdd1300a504e0";
const URL_BACK = "http://localhost:3000/"

export const endpoints = {
  getAllMovies: `${URL_API}now_playing?api_key=${KEY_API}&language=es-ES`,
  getMovie: (id) => `${URL_API}${id}?api_key=${KEY_API}&language=es-ES`,
  getCinemas:  `${URL_BACK}cinema`
};
