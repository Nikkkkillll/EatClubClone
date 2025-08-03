// import React from "react";
// import { Link } from "react-router-dom";

// function ProteinMeals(valuelist) {
//     const renderList = ({ valuelist }) => {
//         if (valuelist) {
//             return valuelist.map((value) => {
//                 return (
//                     <div >
//                         {/* <!-- Spicy Jalapeno --> */}
//                         <div key={value.id} className="pizza-card">
//                             <Link to='/cart'>
//                                 <img src={value.img} alt={value.title} />
//                             </Link>
//                             <div className="imgcontent">
//                                 <h3><img className="vegsignlogo"
//                                     src={value.indiimg} alt={value.title} />
//                                     {value.title}</h3>
//                                 <p>{value.description}</p>
//                             </div>
//                             <div className="price-add">
//                                 <span className="price">₹{value.discount_price} <del>₹{value.original_price}</del></span>
//                                 <Link to='/cart'>
//                                     <button className="add-btn">
//                                         ADD +
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             })
//         }
//     }
//     return (
//         <div>
//             <section className="menu-section">
//                 <h2>WEFIT PROTEIN BOWLS</h2>
//                 <p>Wholesome bowls full of proteins, with a good mix of greens, seeds & topped with delicious dressings!</p>

//                 <div className="card-container">
//                     {renderList(valuelist)}
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default ProteinMeals;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProteinMeals() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Fetch data from API
  useEffect(() => {
    fetch("http://localhost:5009/ProteinMeal") // change endpoint as per your data
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFiltered(data);
      })
      .catch((err) => console.error("Error fetching protein meals:", err));
  }, []);

  // Apply Search, Filter & Sort
  useEffect(() => {
    let updated = [...items];

    // Search
    if (searchTerm) {
      updated = updated.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter (if type exists in your data)
    if (filterType !== "All") {
      updated = updated.filter(
        (item) => item.type?.toLowerCase() === filterType.toLowerCase()
      );
    }

    // Sort by discount price
    if (sortOrder === "asc") {
      updated.sort((a, b) => a.discount_price - b.discount_price);
    } else if (sortOrder === "desc") {
      updated.sort((a, b) => b.discount_price - a.discount_price);
    }

    setFiltered(updated);
  }, [searchTerm, filterType, sortOrder, items]);

  return (
    <section className="menu-section">
      <h2>WEFIT PROTEIN BOWLS</h2>
      <p>
        Wholesome bowls full of proteins, with a good mix of greens, seeds &
        topped with delicious dressings!
      </p>

      {/* Controls */}
      <div
        className="controls"
        style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
      >
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Sort by Price</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>
      </div>

      {/* Cards */}
      <div className="card-container">
        {filtered.length > 0 ? (
          filtered.map((value) => (
            <div key={value.id} className="pizza-card">
              <Link to="/cart">
                <img src={value.img} alt={value.title} />
              </Link>
              <div className="imgcontent">
                <h3>
                  <img
                    className="vegsignlogo"
                    src={value.indiimg}
                    alt={value.title}
                  />
                  {value.title}
                </h3>
                <p>{value.description}</p>
              </div>
              <div className="price-add">
                <span className="price">
                  ₹{value.discount_price} <del>₹{value.original_price}</del>
                </span>
                <Link to="/cart">
                  <button className="add-btn">ADD +</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </section>
  );
}

export default ProteinMeals;



