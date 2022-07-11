import React from "react";
import "./Videos.scss";
import VideoCard from "./VideoCard";

const Videos = () => {
  return (
    <div className="videos">
      <h2 className="videos__title">Recommended</h2>
      <div className="videos__list">
        <VideoCard
          title="This is a cute cat"
          views="2.3m Views"
          timestamp="3 days ago"
          image="https://placekitten.com/300/200"
          channel="Cute cats"
          imageChannel="https://i.pravatar.cc/300"
        />
        <VideoCard
          title="This is a cuter cat"
          views="2.3m Views"
          timestamp="3 days ago"
          image="https://placekitten.com/300/200"
          channel="Cute cats"
          imageChannel="https://i.pravatar.cc/300"
        />
        <VideoCard
          title="This is an adorable cat"
          views="2.3m Views"
          timestamp="3 days ago"
          image="https://placekitten.com/300/200"
          channel="Cute cats"
          imageChannel="https://i.pravatar.cc/300"
        />
        <VideoCard
          title="This is the cutest cat"
          views="2.3m Views"
          timestamp="3 days ago"
          image="https://placekitten.com/300/200"
          channel="Cute cats"
          imageChannel="https://i.pravatar.cc/300"
        />
        <VideoCard
          title="This is even cuter!"
          views="2.3m Views"
          timestamp="3 days ago"
          image="https://placekitten.com/300/200"
          channel="Cute cats"
          imageChannel="https://i.pravatar.cc/300"
        />
        <VideoCard
          title="This is a cute cat"
          views="2.3m Views"
          timestamp="3 days ago"
          channelImage="https://placekitten.com/300/200"
          channel="Cute cats"
          imageChannel="https://i.pravatar.cc/300"
        />
      </div>
    </div>
  );
};

export default Videos;
