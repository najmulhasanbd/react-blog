/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-gray-300 mb-2 p-3 rounded">
      <h3>{title}</h3>
    </div>
  );
};

export default Bookmark;
