
import { Link } from "react-router-dom";
import { products, categories } from "../data/products";

function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <main>
      <section className="hero-section" id="home">
        <div className="hero-content">
          <p className="hero-small">
            YOUR MEDICAL EQUIPMENT PARTNER
          </p>

          <h1>
            Medical Equipment & Hospital Solutions You Can Rely On
          </h1>

          <p className="hero-text">
            AMG Medical System supplies medical and hospital
            equipment for hospitals, clinics and healthcare facilities.
          </p>

          <div className="hero-actions">
            <Link className="shop-btn" to="/products">
              Explore All Products
            </Link>

            <Link className="contact-btn" to="/contact">
              Contact Us
            </Link>
          </div>

          <p className="hero-location">
            Agra, Uttar Pradesh, India
          </p>
        </div>
      </section>

      <section className="categories-section">
        <div className="section-heading">
          <p className="hero-small">OUR PRODUCT RANGE</p>
          <h2>Explore Our Categories</h2>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.title}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <Link to="/categories">Explore Category →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="products-section">
        <div className="section-heading">
          <p className="hero-small">FEATURED PRODUCTS</p>
          <h2>Popular Medical Equipment</h2>
          <p>Explore a selection from our product catalogue.</p>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
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
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link className="quote-btn" to="/contact">
                  Request a Quote
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="section-heading">
          <Link className="shop-btn" to="/products">
            View All 47 Products
          </Link>
        </div>
      </section>

      <section className="about-section">
        <div>
          <p className="hero-small">ABOUT AMG MEDICAL SYSTEM</p>
          <h2>Supporting Healthcare Through Medical Supplies</h2>
        </div>

        <p>
          AMG Medical System supplies medical and hospital equipment,
          patient-care products, monitoring devices and hospital
          accessories for healthcare facilities.
        </p>

        <Link to="/about">Learn More About Us →</Link>
      </section>

      <section className="contact-section">
        <p className="hero-small">GET IN TOUCH</p>
        <h2>Looking for Medical Equipment?</h2>
        <p>
          Contact our team to discuss your hospital or healthcare
          equipment requirements.
        </p>

        <Link className="shop-btn" to="/contact">
          Contact Our Team
        </Link>
      </section>
    </main>
  );
}

export default Home;
