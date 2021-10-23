import React, { useState, useEffect } from "react";
import axiosReq from "../../Config/axiosReq";
import Post from "../../Components/Post/Post";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import { fetchMovies } from "../../Config/fetchActions";
import Genres from "../../Components/Genres/Genres";
import useSelectedGenre from "../../Hooks/useSelectedGenre/useSelectedGenre";

const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(0);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genreforURL = useSelectedGenre(selectedGenres);

  useEffect(() => {
    const fetchTrending = async () => {
      const { data } = await axiosReq.get(
        `${fetchMovies}&page=${page}&with_genres=${genreforURL}`
      );
      setContent(data.results);
      setNoOfPages(data.total_pages);
      console.log("MOVIES ", data.results);
    };

    fetchTrending();
    // return () => {
    //   setContent([]);
    // };
  }, [page, genreforURL]);
  return (
    <>
      <h1>Movies Pg</h1>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
      <div className="row__section">
        {content.length > 0 &&
          content.map((data) => {
            // console.log(data);
            return (
              <Post
                key={data.id}
                id={data.id}
                title={data?.title || data?.name || data?.original_name}
                date={data?.release_date || data?.first_air_date}
                poster_path={data.poster_path}
                backdrop_path={data.backdrop_path}
                media_type="movie"
                vote_average={data.vote_average}
              />
            );
          })}
      </div>
      {noOfPages > 1 && (
        <CustomPagination setPage={setPage} noOfPages={noOfPages} />
      )}
    </>
  );
};

export default Movies;
