import React, { useEffect } from "react";
import axiosReq from "../../Config/axiosReq";
import { fetchGeners } from "../../Config/fetchActions";
import "./Genres.css";
import Chip from "@mui/material/Chip";

const Genres = ({ type, selectedGenres, setSelectedGenres, setPage }) => {
  const [genres, setGenres] = React.useState([]);

  const handleClick = (event, genreSelected) => {
    console.info("You clicked the selected icon. ", genreSelected);
    setSelectedGenres((prevState) => {
      return [...prevState, genreSelected];
    });
    setGenres(genres.filter((eachGenre) => eachGenre.id !== genreSelected.id));
    setPage(1);
  };

  const handleDelete = (event, genreSelected) => {
    console.info("You clicked the delete icon. ", genreSelected);
    setGenres((prevState) => {
      return [...prevState, genreSelected];
    });
    setSelectedGenres(
      selectedGenres.filter((eachGenre) => eachGenre.id !== genreSelected.id)
    );
    setPage(1);
  };

  useEffect(() => {
    const getGenres = async () => {
      const { data } = await axiosReq.get(fetchGeners(type));
      const { genres } = data;
      setGenres(genres);
      console.log("genres", genres);
    };
    getGenres();
    return () => {
      setGenres({});
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className="genres__section">
      {selectedGenres.length > 0 &&
        selectedGenres.map((selectedGenre) => (
          <Chip
            key={selectedGenre.id}
            label={selectedGenre.name}
            clickable
            onClick={(event) => handleDelete(event, selectedGenre)}
            onDelete={(event) => handleDelete(event, selectedGenre)}
            color="error"
            style={{
              margin: ".1rem .3rem",
              //   backgroundColor: "white",
              //   opacity: ".2",
              //   color: "black",
            }}
            size="small"
          />
        ))}
      {genres.length > 0 &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            clickable
            onClick={(event) => handleClick(event, genre)}
            color="secondary"
            style={{
              margin: ".1rem .3rem",
              backgroundColor: "white",
              opacity: ".2",
              color: "black",
            }}
            size="small"
          />
        ))}
    </div>
  );
};

export default Genres;
