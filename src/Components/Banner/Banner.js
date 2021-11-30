import { useEffect, useState } from "react";
import axiosReq from "../../Config/axiosReq";
import { fetchUpcoming } from "../../Config/fetchActions";
import { fetchContentVideo } from "../../Config/fetchActions";
import "./Banner.css";
import { IMG_BASE_URL_ORIGINAL } from "../../Config/config";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [video, setVideo] = useState([]);
  const truncate = (str, len) => {
    return str?.length > len ? str.substr(0, len - 1) + "..." : str;
  };

  useEffect(() => {
    const fetchBanner = async () => {
      const response = await axiosReq.get(fetchUpcoming);
      const movieList = response.data.results;
      const RANDOM_NO = Math.floor(Math.random() * movieList.length - 1);
      console.log("Movie Name", movieList[RANDOM_NO]);
      setMovie(movieList[RANDOM_NO]);
    };
    fetchBanner();
    const fetchVideo = async () => {
      try {
        const { data } = await axiosReq.get(
          fetchContentVideo("movie", movie.id)
        );
        // console.log(media_type, " feteh data ",data?.results[0]?.key);
        setVideo(data?.results[0]?.key);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <header
      className="banner"
      style={{
        background: `url("${IMG_BASE_URL_ORIGINAL}${movie?.backdrop_path}")no-repeat center center/cover`,
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* {title} */}
        {/* Button*2 */}

        <div className="banner__buttons">
          <button className="banner__btn">
            <a
              href={`https://www.youtube.com/watch?v=${video}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Play
            </a>
          </button>
          {/* <button className="banner__btn">MyList</button> */}
        </div>
        {/* movie discription */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;
