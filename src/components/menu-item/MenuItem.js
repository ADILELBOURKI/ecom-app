import React from "react";
import "./menu-item.scss";
import { withRouter } from "react-router-dom";
const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
  return (
    <div
      className="background-image menu-item "
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => {
        return history.push(`${match.url}${linkUrl}`);
      }}
    >
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
