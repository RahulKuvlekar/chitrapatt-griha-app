const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchTrendingAllDay = `/trending/all/day?api_key=${API_KEY}&language=en-US`;

export const fetchMovies = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;

export const fetchTVseries = `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;

export const fetchUpcoming = `/movie/upcoming?api_key=${API_KEY}&language=en-US`;

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
