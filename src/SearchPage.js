import React from "react";
import "./SearchPage.scss";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://placekitten.com/300/200"
        channel="Cutest Cats"
        verified
        subs="659k"
        noOfVideos={680}
        description="Find only the cutest cats here"
      />
      <hr />

      <VideoRow
        image="https://placekitten.com/300/200"
        title="Don't you just love cats?"
        channel="Cutest Cats"
        views="1.3m"
        timestamp="3 days ago"
        subs="549"
        description="Get your cat fix here!"
      />

      <VideoRow
        image="https://placekitten.com/300/200"
        title="CATS, CATS, CATS!"
        channel="Cutest Cats"
        views="1.3m"
        timestamp="53 days ago"
        subs="549"
        description="Get your cat fix here!"
      />

      <VideoRow
        image="https://placekitten.com/300/200"
        title="Cat McCatFace"
        channel="Cutest Cats"
        views="1.3m"
        timestamp="1 day ago"
        subs="549"
        description="Get your cat fix here!"
      />
    </div>
  );
};

export default SearchPage;
