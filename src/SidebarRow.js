import React from "react";
import "./SidebarRow.scss";

const SidebarRow = (props) => {
  const { selected, title, Icon } = props;
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow__icon" />
      <h1 className="sidebarRow__title">{title}</h1>
    </div>
  );
};

export default SidebarRow;
