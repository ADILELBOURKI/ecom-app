import React from "react";

import "./preview-collection.scss";
import CollectionItem from "../collection/CollectionItem";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => {
            return index < 4;
          })
          .map(({ id, ...itemProps }) => {
            return <CollectionItem key={id} {...itemProps} />;
          })}
      </div>
    </div>
  );
};

export default PreviewCollection;
