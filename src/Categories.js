import React from "react";

const Categories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      <button onClick={() => filterItems("breakfast")}>breakfast</button>
    </div>
  );
};

export default Categories;
