import axiosReq from "../../Config/axiosReq";
import { useEffect, useState } from "react";
import cssClasses from "./Row.module.css";
import Post from "../Post/Post";

const Row = (props) => {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosReq.get(props.fetchURL);
      const data = await response.data;
      // console.log(data.results);
      setMoviesList(data.results);
    };
    fetchData();
  }, [props.fetchURL]);

  const listOfMovies = moviesList.map((data, idx) => (
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
  ));

  return (
    <div className={cssClasses.row}>
      <h1>{props.title}</h1>
      <ul className={cssClasses["row__list"]}> {listOfMovies}</ul>
    </div>
  );
};
export default Row;
