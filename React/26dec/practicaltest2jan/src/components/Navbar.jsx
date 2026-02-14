import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-4">
          <NavLink className="navbar-brand fw-bold" to="/">
            Maharufh
          </NavLink>

          <NavLink className="nav-link text-light" to="/">
            Home
          </NavLink>

          <NavLink className="nav-link text-light" to="/service">
            Services
          </NavLink>

          <NavLink className="nav-link text-light" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
