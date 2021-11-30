const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchTrendingAllDay = `/trending/all/day?api_key=${API_KEY}&language=en-US`;

export const fetchMovies = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;

export const fetchTVseries = `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;

export const fetchUpcoming = `/movie/upcoming?api_key=${API_KEY}&language=en-US`;

export const request = {
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  fetecTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComdeyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentriesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const fetchGeners = (type) =>
  `/genre/${type}/list?api_key=${API_KEY}&language=en-US`;

export const fetchSearches = (type, searchText) =>
  `/search/${
    type ? "tv" : "movie"
  }?api_key=${API_KEY}&language=en-US&query=${searchText}&include_adult=false`;

export const fetchContentData = (media_type, id) =>
  `/${media_type}/${id}?api_key=${API_KEY}&language=en-US`;

export const fetchContentVideo = (media_type, id) =>
  `/${media_type}/${id}/videos?api_key=${API_KEY}&language=en-US`;

export const fetchContentCredits = (media_type, id) =>
  `/${media_type}/${id}/credits?api_key=${API_KEY}&language=en-US`;
