import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import coffeeData from "./pages/coffeeData";
import "./App.css";

function App() {
  const [products, setProducts] = useState(coffeeData);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const editProduct = (id, newPrice) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, price: Number(newPrice) }
          : product
      )
    );
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/shop"
          element={<Shop products={products} />}
        />

        <Route
          path="/admin"
          element={
            <Admin
              products={products}
              addProduct={addProduct}
              editProduct={editProduct}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;