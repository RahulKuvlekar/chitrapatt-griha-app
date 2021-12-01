import React, { useEffect } from "react";
import "./Home.css";
// import Post from "../../Components/Post/Post";
// import axiosReq from "../../Config/axiosReq";
// import { fetchTrendingAllDay } from "../../Config/fetchActions";
// import CustomPagination from "../../Components/Pagination/CustomPagination";
import Banner from "../../Components/Banner/Banner";
import Row from "../../Components/Row/Row";
import { request } from "../../Config/fetchActions";

const Trending = () => {
  // console.log(process.env.REACT_APP_API_KEY);
  // const [content, setContent] = useState([]);
  // const [page, setPage] = useState(1);

  useEffect(
    () => {
      // const fetchTrending = async () => {
      //   const { data } = await axiosReq.get(
      //     `${fetchTrendingAllDay}&page=${page}`
      //   );
      //   setContent(data.results);
      //   console.log("Trending ", data.results);
      // };
      // fetchTrending();
      // return () => {
      //   setContent([]);
      // };
      window.scroll(0, 0);
    },
    [
      // page
    ]
  );

  return (
    <>
      <Banner />
      <Row title={"Highly Rated"} fetchURL={request.fetecTopRated} />
      <Row title={"Action Movies"} fetchURL={request.fetchActionMovies} />
      <Row title={"Trending Movies"} fetchURL={request.fetchTrending} />
      <Row title={"Comedy Movies"} fetchURL={request.fetchComdeyMovies} />
      <Row title={"Upcoming Next"} fetchURL={request.fetchUpcoming} />
      <Row title={"Trending Shows"} fetchURL={request.fetchTrendingTV} />
      <Row title={"Horror Movies"} fetchURL={request.fetchHorrorMovies} />
      <Row title={"Romantic Movies"} fetchURL={request.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchURL={request.fetchDocumentriesMovies} />
      {/* <h1>Trending Pg</h1>
      <div
        id="row__section"
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
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
      <CustomPagination setPage={setPage} /> */}
    </>
  );
};

export default Trending;
