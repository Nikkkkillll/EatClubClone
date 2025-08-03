// import React from "react";
// import { Link } from "react-router-dom";

// function WhatNew(valuelist) {
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
//                                 <span className="price">₹{value.discounted_price} <del>₹{value.price}</del></span>
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
//                 <h2>WHATSNEW</h2>
//                 <p>Here are all the new & exciting dishes you must try!</p>

//                 <div className="card-container">
//                     {renderList(valuelist)}
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default WhatNew;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function WhatNew() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Fetch items from API (change endpoint if needed)
  useEffect(() => {
    fetch("http://localhost:5009/Whatsnew")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFiltered(data);
      })
      .catch((err) => console.error("Error fetching WhatsNew items:", err));
  }, []);

  // Apply search, filter, and sort
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
    // if (filterType !== "All") {
    //   updated = updated.filter((item) =>
    //     item.type
    //       ?.toLowerCase()
    //       .replace(/[\s-]/g, "") === filterType.toLowerCase().replace(/[\s-]/g, "")
    //   );
    // }

    // Sort by discounted price
    if (sortOrder === "asc") {
      updated.sort((a, b) => a.discounted_price - b.discounted_price);
    } else if (sortOrder === "desc") {
      updated.sort((a, b) => b.discounted_price - a.discounted_price);
    }

    setFiltered(updated);
  }, [searchTerm, filterType, sortOrder, items]);

  return (
    <section className="menu-section">
      <h2>WHATSNEW</h2>
      <p>Here are all the new & exciting dishes you must try!</p>

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
                  ₹{value.discounted_price} <del>₹{value.price}</del>
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

export default WhatNew;




