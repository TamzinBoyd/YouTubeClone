import React from "react";
import "./VideoCard.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const VideoCard = (props) => {
  const { image, title, channel, views, timestamp, imageChannel } = props;
  return (
    <div className="video">
      <img classname="video__thumbnail" src={image} alt="" />
      <div className="video__info">
        <AccountCircleIcon
          className="video__avatar"
          alt={channel}
          src={imageChannel}
        />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
