import React from "react";

const Categories = ({ categories, filterMenu }) => {
  // console.log("bloop", price, "lol");

  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
      {/* <button className="filter-btn"></button> */}
    </>
  );
};

export default Categories;
