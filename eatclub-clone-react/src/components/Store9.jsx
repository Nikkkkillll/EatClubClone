// import React from "react";
// import { Link } from "react-router-dom";

// function Store9(valuelist) {
//     const renderList = ({ valuelist }) => {
//         if (valuelist) {
//             return valuelist.map((value) => {
//                 return (
//                     <div >
//                         {/* <!-- Spicy Jalapeno --> */}
//                         <div key={value.id} className="pizza-card">
//                             <Link to='/cart'>
//                                 <img src={value.img} alt={value.altname} />
//                             </Link>
//                             <div className="imgcontent">
//                                 <h3><img className="vegsignlogo"
//                                     src={value.indiimg} alt={value.name} />
//                                     {value.name}</h3>
//                                 <p>{value.description}</p>
//                             </div>
//                             <div className="price-add">
//                                 <span className="price">₹{value.offerprice} <del>₹{value.price}</del></span>
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
//                 <h2>₹99 STORE</h2>
//                 <p>Introducing our daily-changing menu! Choose from handpicked selections under this special menu, starting at just ₹99.</p>

//                 <div className="card-container">
//                     {renderList(valuelist)}
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Store9;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Store9() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Fetch store items
  useEffect(() => {
    fetch("http://localhost:5009/Store99") // change endpoint as per your json-server
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFiltered(data);
      })
      .catch((err) => console.error("Error fetching store items:", err));
  }, []);

  // Apply Search, Filter & Sort
  useEffect(() => {
    let updated = [...items];

    // Search
    if (searchTerm) {
      updated = updated.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter (if type exists in your data)
    if (filterType !== "All") {
      updated = updated.filter(
        (item) => item.type?.toLowerCase() === filterType.toLowerCase()
      );
    }

    // Sort by offer price
    if (sortOrder === "asc") {
      updated.sort((a, b) => a.offerprice - b.offerprice);
    } else if (sortOrder === "desc") {
      updated.sort((a, b) => b.offerprice - a.offerprice);
    }

    setFiltered(updated);
  }, [searchTerm, filterType, sortOrder, items]);

  return (
    <section className="menu-section">
      <h2>₹99 STORE</h2>
      <p>
        Introducing our daily-changing menu! Choose from handpicked selections
        under this special menu, starting at just ₹99.
      </p>

      {/* Controls */}
      <div
        className="controls"
        style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
      >
        <input
          type="text"
          placeholder="Search by name..."
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

      {/* Store Items */}
      <div className="card-container">
        {filtered.length > 0 ? (
          filtered.map((value) => (
            <div key={value.id} className="pizza-card">
              <Link to="/cart">
                <img src={value.img} alt={value.altname} />
              </Link>
              <div className="imgcontent">
                <h3>
                  <img
                    className="vegsignlogo"
                    src={value.indiimg}
                    alt={value.name}
                  />
                  {value.name}
                </h3>
                <p>{value.description}</p>
              </div>
              <div className="price-add">
                <span className="price">
                  ₹{value.offerprice} <del>₹{value.price}</del>
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

export default Store9;




