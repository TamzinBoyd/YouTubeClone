import React from "react";
import "./Sidebar.scss";
import "./SidebarRow";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={SubscriptionsIcon} />
      <SidebarRow title="Subscription" Icon={WhatshotIcon} />
    </div>
  );
};

export default Sidebar;
