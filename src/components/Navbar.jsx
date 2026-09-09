import { IoSearch } from "react-icons/io5";
import "../stylesheet/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import shoppingBag from "../assets/svgs/shoppingBag.svg";
import { Link } from "react-router-dom";

export default function Navbar({ cart, setCart }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="nav-left-side">
          {/*  {hamburger menu} */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-btn"
            id="menuBtn"
          >
            {menuOpen ? <i className="bi bi-x-lg"></i> : <GiHamburgerMenu />}
          </button>

          <ul
            className={menuOpen ? "nav-links active" : "nav-links"}
            id="navLinks"
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/shop">COLLECTIONS</Link>
            </li>
            <li className="nav-about">
              <Link to="/about">ABOUT US</Link>
            </li>
            <li className="nav-contact">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        <div className="nav-logo">
          <h3>KODACLUXE</h3>
          <p>Time Elevated</p>
        </div>

        <div className="nav-right-side">
          <div className="nav-search">
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <i className="bi bi-search"></i>
            </button>

            <input
              className={searchOpen ? "search-input active" : "search-input"}
              type="search"
              name=""
              id="search-Input"
              placeholder="What're you looking for"
            />
          </div>

          <div className="nav-login">
            <Link to="/login" id="profile-btn">
              <i className="bi bi-person"></i>
            </Link>
          </div>

          <div className="nav-cart">
            <button onClick={() => setCartOpen(!cartOpen)} id="cart-btn">
              <i className="bi bi-bag"></i>
            </button>
          </div>
        </div>
      </nav>
      <div className="nav-second-row">
        <IoSearch className="bi bi-search" />

        <input
          type="search"
          name=""
          id="searchInput"
          placeholder="What're you looking for?"
        />
      </div>
      {/* cart section */}

      {/* cart section */}

      <div className={cartOpen ? "cart active" : "cart"} id="cart">
        {/* Cart Header - always visible */}
        <div className="cart-header">
          <h3>YOUR CART</h3>

          <button onClick={() => setCartOpen(false)} id="close-btn">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 && (
          <div className="cart-empty">
            <div className="cart-contents">
              <img src={shoppingBag} alt="shoppingBag" />

              <h4>YOUR CART IS EMPTY</h4>
              <p>Discover your next timepiece</p>

              <Link to="/shop">SHOP WATCHES</Link>

              <Link to="/shop">Continue shopping</Link>
            </div>
          </div>
        )}

        {/* Cart Items */}
        {cart.map((product) => (
          <div className="cart-items" key={product.id}>
            <div className="product-img">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-details">
              <h2>{product.name}</h2>

              <h3>
                {product.size} • {product.movement}
              </h3>

              <p>₦{product.price.toLocaleString()}</p>

              <div className="product-details-quantity">
                <div className="quantity">
                  <button type="button">−</button>

                  <span>1</span>

                  <button type="button">+</button>
                </div>

                <div>
                  <button type="button">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
