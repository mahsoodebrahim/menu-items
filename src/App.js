import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    const filteredItems = menuItems.filter(
      (menuItem) => menuItem.category === category
    );
    setMenuItems(filteredItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
