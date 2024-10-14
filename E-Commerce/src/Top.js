import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from "react-use-cart";

function Top() {
  const { totalItems } = useCart();
  return (
    <div>
      <header id="#top">

<nav className="main-navigation navbar navbar-expand-lg navbar-light nav-fixed">
    <div className="container">
      <Link className="navbar-brand" to="/"><img src="assets/images/white-logo.png" alt=""/></Link>

      <Link
              className="nav-icon position-relative text-decoration-none d-lg-none mr-2"
              to="/Cart"
            >
              <i className="fa fa-fw fa-cart-arrow-down text-light mr-1"></i>
              <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                {totalItems}
              </span>
            </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Homepage</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Explore">Explore Work</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Shop">Shop</Link>
          </li>
          <li>
          <Link
                className="nav-icon position-relative text-decoration-none d-none d-lg-inline"
                to="/Cart"
              >
                <i className="fa fa-fw fa-cart-arrow-down text-light mx-3 pt-3"></i>
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  {totalItems}
                </span>
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
</nav>

</header>
    </div>
  )
}

export default Top;
