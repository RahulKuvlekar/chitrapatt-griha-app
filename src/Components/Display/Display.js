import React, { useState, useEffect } from "react";
import axiosReq from "../../Config/axiosReq";
import Post from "../Post/Post";
import CustomPagination from "../Pagination/CustomPagination";
import Genres from "../Genres/Genres";
import useSelectedGenre from "../../Hooks/useSelectedGenre/useSelectedGenre";
import "./Display.css";

const Display = ({ fetchAction, genreType, label }) => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(0);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genreforURL = useSelectedGenre(selectedGenres);

  useEffect(() => {
    const fetchTrending = async () => {
      const { data } = await axiosReq.get(
        `${fetchAction}&page=${page}&with_genres=${genreforURL}`
      );
      setContent(data.results);
      setNoOfPages(data.total_pages);
      console.log("MOVIES ", data.results);
    };

    fetchTrending();
    // return () => {
    //   setContent([]);
    // };
    // eslint-disable-next-line
  }, [page, genreforURL]);
  return (
    <>
      <h1>{label}</h1>
      <Genres
        type={genreType}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
      <div className="display__row__section">
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
                media_type={genreType === "tv" ? "tv" : "movie"}
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

export default Display;
