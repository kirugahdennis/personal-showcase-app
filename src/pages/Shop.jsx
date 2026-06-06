import { useState } from "react"


function Shop({ products }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);


  const filteredCoffee = products.filter((coffee) =>
coffee.name.toLowerCase().includes(search.toLowerCase()) || 
  coffee.description.toLowerCase().includes(search.toLowerCase()) ||
  coffee.origin.toLowerCase().includes(search.toLowerCase()) ||
  coffee.price.toString().includes(search)
  );

  return (
    <div className="shop-container">
      <aside className="sidebar">
        <input
          type="text"
          placeholder="Search for coffee"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </aside>

      <section className="coffee-grid">
        {filteredCoffee.map((coffee) => (
          <div
            key={coffee.id}
            className="coffee-card"
            onClick={() => setSelected(coffee)}
            style={{ cursor: "pointer" }}
          >
            <h2>{coffee.name}</h2>
            <p>{coffee.description}</p>
            <p>{coffee.origin}</p>
            <p>KES {coffee.price}</p>
          </div>
        ))}
      </section>

      {selected && (
        <div className="coffee-details" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              X
            </button>
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>
            <p>
              <strong>Origin:</strong> {selected.origin}
            </p>
            <p>
              <strong>Price:</strong> KES {selected.price}
            </p>
            <button className="Order-btn">Order Now</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop; 