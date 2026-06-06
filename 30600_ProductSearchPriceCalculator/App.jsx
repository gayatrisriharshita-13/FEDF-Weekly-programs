import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import ProductList from "./ProductList";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Keyboard", price: 1500 },
  ]);

  const [searchText, setSearchText] = useState("");

  const searchRef = useRef(null);

  // Update browser title when search text changes
  useEffect(() => {
    document.title = `Search: ${searchText}`;
  }, [searchText]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [products, searchText]);

  // Calculate total price of displayed products
  const totalPrice = useMemo(() => {
    return filteredProducts.reduce(
      (total, product) => total + product.price,
      0
    );
  }, [filteredProducts]);

  // Remove product using useCallback
  const removeProduct = useCallback((id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Search & Price Calculator</h1>

      <input
        type="text"
        placeholder="Search Product"
        value={searchText}
        ref={searchRef}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button
        onClick={() => searchRef.current.focus()}
        style={{ marginLeft: "10px" }}
      >
        Focus Search
      </button>

      <hr />

      <h3>Total Price of Displayed Products: ₹{totalPrice}</h3>

      <ProductList
        products={filteredProducts}
        removeProduct={removeProduct}
      />
    </div>
  );
}

export default App;