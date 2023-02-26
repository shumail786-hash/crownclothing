import React from "react";
import { Link } from "react-router-dom";
import "./directory-item.styles.scss";
const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body">
        <Link to={`/shop/${title.toLowerCase()}`}>
          <h2>{title}</h2>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
