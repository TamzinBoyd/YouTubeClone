import React from "react";
import "./VideoRow.scss";

const VideoRow = (props) => {
  const { image, title, channel, views, timestamp, subs, description } = props;
  return (
    <div className="videoRow">
      <img src={image} />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} •{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNo">{subs} </span> > Subscribers
          </span>{" "}
          • {views} Views • {timestamp}
        </p>
        <p className="videoRow__headline">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
