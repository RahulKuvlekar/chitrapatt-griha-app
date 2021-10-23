import React from "react";
import Pagination from "@mui/material/Pagination";
import "./CustomPagination.css";

const CustomPagination = ({ setPage, noOfPages = 10 }) => {
  const handlePageChange = (pageNo) => {
    console.log("page No", pageNo);
    setPage(pageNo);
    window.scroll(0, 0);
  };

  return (
    <>
      <Pagination
        className="custom-pagination"
        count={noOfPages}
        size="large"
        onClick={(event) => handlePageChange(event.target.textContent)}
        hidePrevButton
        hideNextButton
      />
    </>
  );
};

export default CustomPagination;
