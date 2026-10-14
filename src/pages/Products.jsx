
import { useState } from "react";
import { products } from "../data/products";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const productCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="products-section">
      <div className="section-heading">
        <p className="hero-small">OUR PRODUCTS</p>
        <h1>Medical Equipment Catalogue</h1>
        <p>Explore medical equipment for healthcare facilities.</p>
      </div>

      <div className="product-controls">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          aria-label="Filter products by category"
        >
          {productCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image-wrap">
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
              <span className="demo-image-label">DEMO IMAGE</span>
            </div>

            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <a className="quote-btn" href="/contact">
                Request a Quote
              </a>
            </div>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="no-products">No matching products found.</p>
      )}
    </main>
  );
}

export default Products;
