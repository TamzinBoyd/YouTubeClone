import React from "react";
import "./SidebarRow.scss";

const SidebarRow = (props) => {
  const { title, Icon } = props;
  return (
    <div className="sidebarRow">
      <Icon className="sidebarRow__icon" />
      <h1 className="sidebarRow__title">{title}</h1>
    </div>
  );
};

export default SidebarRow;
