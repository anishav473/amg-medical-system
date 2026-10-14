
import { categories } from "../data/products";

function Categories() {
  return (
    <main className="categories-section">
      <div className="section-heading">
        <p className="hero-small">OUR PRODUCT RANGE</p>
        <h1>Medical Equipment Categories</h1>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <article className="category-card" key={category.title}>
            <h2>{category.title}</h2>
            <p>{category.description}</p>
            <a href="/products">View Products →</a>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Categories;
  