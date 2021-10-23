const useSelectedGenre = (selectedGenres) => {
  if (selectedGenres.length < 1) {
    return "";
  }
  const genreId = selectedGenres.map((eachGenre) => eachGenre.id);

  return genreId.reduce((acc, curr) => acc + "," + curr);
};

export default useSelectedGenre;
