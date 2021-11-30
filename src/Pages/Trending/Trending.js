import React, { useEffect, useState } from "react";
import "./Trending.css";
import Post from "../../Components/Post/Post";
import axiosReq from "../../Config/axiosReq";
import { fetchTrendingAllDay } from "../../Config/fetchActions";
import CustomPagination from "../../Components/Pagination/CustomPagination";

const Trending = () => {
  // console.log(process.env.REACT_APP_API_KEY);
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTrending = async () => {
      const { data } = await axiosReq.get(
        `${fetchTrendingAllDay}&page=${page}`
      );
      setContent(data.results);
      console.log("Trending ", data.results);
    };
    fetchTrending();

    // return () => {
    //   setContent([]);
    // };
  }, [page]);

  return (
    <>
      <h1>Trending Pg</h1>
      <div id="row__section">
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
                media_type={data.media_type}
                vote_average={data.vote_average}
              />
            );
          })}
      </div>
      <CustomPagination setPage={setPage} />
    </>
  );
};

export default Trending;
