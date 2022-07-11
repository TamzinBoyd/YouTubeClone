import React from "react";
import logo from "./images/me.png";
import "./ChannelRow.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const ChannelRow = (props) => {
  const { image, channel, verified, subs, noOfVideos, description } = props;
  return (
    <div className="channelRow">
      <img src={logo} className="channelRow__logo" />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
