import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

let categories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  // console.log(categories);
  const [menuItems, setMenuItems] = useState(items);
  const [menuCategories, setMenuCategories] = useState(categories);

  //filters items to corresponding categories
  const filterMenu = (category) => {
    if (category === "all") {
      setMenuItems(items);
    } else {
      let filteredItems = items.filter(
        (menuItem) => menuItem.category === category
      );
      setMenuItems(filteredItems);
    }
  };

  console.log(menuItems);

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
            <Categories categories={categories} filterMenu={filterMenu} />
          </div>
          <div className="section-center">
            <Menu menuItems={menuItems} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
