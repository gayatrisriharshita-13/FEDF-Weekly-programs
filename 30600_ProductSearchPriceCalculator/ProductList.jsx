import React from "react";

function ProductList({ products, removeProduct }) {
  return (
    <div>
      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ₹{product.price}

              <button
                onClick={() => removeProduct(product.id)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default React.memo(ProductList);