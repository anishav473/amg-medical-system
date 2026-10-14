
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="site-navbar">
      <NavLink to="/" className="navbar-brand">
        AMG Medical System
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/products">
          Products
        </NavLink>

        <NavLink to="/categories">
          Categories
        </NavLink>

        <NavLink to="/about">
          About Us
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
