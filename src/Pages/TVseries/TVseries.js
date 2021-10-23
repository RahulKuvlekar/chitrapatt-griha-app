import React from "react";
import Display from "../../Components/Display/Display";
import { fetchTVseries } from "../../Config/fetchActions";

const TVseries = () => {
  return (
    <Display fetchAction={fetchTVseries} genreType="tv" label="TV Series" />
  );
};

export default TVseries;
