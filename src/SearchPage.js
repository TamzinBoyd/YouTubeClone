import React from "react";
import "./SearchPage.scss";
import TuneIcon from "@mui/icons-material/Tune";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr></hr>
    </div>
  );
};

export default SearchPage;
