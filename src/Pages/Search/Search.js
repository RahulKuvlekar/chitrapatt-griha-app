import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./Search.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axiosReq from "../../Config/axiosReq";
import Post from "../../Components/Post/Post";
import "../../Components/Display/Display.css";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import { fetchSearches } from "../../Config/fetchActions";

const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);

  const FetchSearch = async () => {
    try {
      if (searchText !== "") {
        const { data } = await axiosReq.get(
          `${fetchSearches(type, searchText)}&page=${page}`
        );
        // console.log(data);
        setContent(data.results);
        setNoOfPages(data.total_pages);
      } else {
        setContent([]);
        setNoOfPages(0);
      }
    } catch (error) {
      console.log("ERROR at Searching ==> ", error);
    }
  };

  useEffect(() => {
    FetchSearch();
    window.scroll(0, 0);
    // eslint-disable-next-line
  }, [page, type, searchText]);

  return (
    <>
      <section className="search__section">
        <div className="search__section-flex">
          <TextField
            id="outlined-basic"
            className="search__input"
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            style={{
              flex: 1,
              // color: "var(--netflix-red)",
              width: "100%",
            }}
          />
          <Button
            variant="contained"
            style={{ marginLeft: ".5rem", minHeight: "100%" }}
            size="large"
            onClick={FetchSearch}
            // color="error"
          >
            <SearchIcon />
          </Button>
        </div>

        <div className="search__tabs">
          <Tabs
            value={type}
            style={{ width: "100%" }}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab
              style={{ width: "50%" }}
              label="Search Movies"
              onClick={(e) => setType(0)}
              className="tab__button"
            />
            <Tab
              style={{
                width: "50%",
              }}
              label="Search TV-Series"
              onClick={(e) => setType(1)}
              className="tab__button"
            />
          </Tabs>
        </div>
      </section>
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
                media_type={type ? "tv" : "movie"}
                vote_average={data.vote_average}
              />
            );
          })}
        {searchText &&
          content.length < 1 &&
          (type ? <h2>No TV-Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {noOfPages > 1 && (
        <CustomPagination setPage={setPage} noOfPages={noOfPages} />
      )}
    </>
  );
};

export default Search;
