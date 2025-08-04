// import React from "react";
// import { Link } from "react-router-dom";

// function ValueFun99(valuelist) {
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
//                                     src={value.img1} alt={value.name} />
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
//                 <h2>VALUE FUN PIZZA @ 99</h2>
//                 <p>Made with 100% real dairy cheese. 0% Mayonnaise. Pocket friendly pizzas, at just ₹99.</p>

//                 <div className="card-container">
//                     {renderList(valuelist)}
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default ValueFun99;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ValueFun99() {
  const [pizzas, setPizzas] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Fetch data
  useEffect(() => {
    axios
      .get("http://localhost:5009/ValueFun99")
      .then((res) => {
        setPizzas(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error("Error fetching pizzas:", err));
  }, []);

  // Apply search, filter, sort
  useEffect(() => {
    let updated = [...pizzas];

    // Search
    if (searchTerm) {
      updated = updated.filter((pizza) =>
        pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by type (if applicable)
    if (filterType !== "All") {
      updated = updated.filter(
        (pizza) => pizza.type?.toLowerCase() === filterType.toLowerCase()
      );
    }

    // Sort by price
    if (sortOrder === "asc") {
      updated.sort((a, b) => a.offerprice - b.offerprice);
    } else if (sortOrder === "desc") {
      updated.sort((a, b) => b.offerprice - a.offerprice);
    }

    setFiltered(updated);
  }, [searchTerm, filterType, sortOrder, pizzas]);

  return (
    <section className="menu-section">
      <h2>🍕 VALUE FUN PIZZA @ 99</h2>
      <p>
        Made with 100% real dairy cheese. 0% Mayonnaise. Pocket friendly pizzas,
        at just ₹99.
      </p>

      {/* Controls */}
      <div className="controls" style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search by pizza name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="All">All Types</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>

        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="default">Sort by Price</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>
      </div>

      {/* Pizza Cards */}
      <div className="card-container">
        {filtered.length > 0 ? (
          filtered.map((pizza) => (
            <div key={pizza.id} className="pizza-card">
              <Link to={`/cart/${pizza.id}`}>
                <img src={pizza.img} alt={pizza.altname} />
              </Link>
              <div className="imgcontent">
                <h3>
                  <img className="vegsignlogo" src={pizza.img1} alt={pizza.name} />
                  {pizza.name}
                </h3>
                <p>{pizza.description}</p>
              </div>
              <div className="price-add">
                <span className="price">
                  ₹{pizza.offerprice} <del>₹{pizza.price}</del>
                </span>
                <Link to={`/cart/${pizza.id}`}>
                  <button className="add-btn">ADD +</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No pizzas found.</p>
        )}
      </div>
    </section>
  );
}

export default ValueFun99;





