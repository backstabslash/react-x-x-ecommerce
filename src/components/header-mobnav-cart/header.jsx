import { useState, useEffect } from "react";
import "./header.css";
import "./mobile-nav.css";
import "./cart.css";
import { Link } from "react-router-dom";
import { useCart, useCartToggle } from "../../context/cartContext";

function Header() {
  // State
  const [headerFixed, setHeaderFixed] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);

  // Cart Context
  const cartItems = useCart();
  const { cartToggle } = useCartToggle();

  // Fixed Header on Scroll Down
  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 0) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);
  }, []);

  // Hide Scrollbar when Mobile Navigation Opened
  useEffect(() => {
    if (mobileNav) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [mobileNav]);

  useEffect(() => {
    setCartItemsQuantity(cartItems.length);
  }, [cartItems.length]);

  return mobileNav ? (
    <div
      className={`mobile-nav ${
        mobileNav ? "mobile-nav-flex" : "mobile-nav-none"
      }`}
    >
      <nav>
        <ul className="mobile-nav__menu">
          <li>
            <Link
              to="/"
              className="mobile-nav__link"
              onClick={() => {
                setMobileNav(false);
                window.top(0, 0);
              }}
            >
              SHOESHOP
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="mobile-nav__link"
              onClick={() => {
                setMobileNav(false);
                window.top(0, 0);
              }}
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to="/product/1"
              className="mobile-nav__link"
              onClick={() => {
                setMobileNav(false);
                window.top(0, 0);
              }}
            >
              Product
            </Link>
          </li>
          <li className="mobile-nav__link-line"></li>
        </ul>
        <div className="mobile-nav__utils">
          <button
            className="mobile-nav__bars"
            onClick={() => setMobileNav(!mobileNav)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  ) : (
    <header
      className={`header container ${headerFixed ? "header__fixed" : ""}`}
    >
      <div className="header__wrapper">
        <Link className="header__brand" to="/" onClick={() => window.top(0, 0)}>
          SHOESHOP
        </Link>
        <nav>
          <ul className="header__menu">
            <li>
              <Link
                className="header__link"
                to="/categories"
                onClick={() => window.top(0, 0)}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                className="header__link"
                to="/product/1"
                onClick={() => window.top(0, 0)}
              >
                Product
              </Link>
            </li>
            <li className="header__line"></li>
            <li>
              <button
                data-array-length={cartItems.length}
                className={`header__cart ${
                  cartItems.length > 0 ? "header__cart-with-items" : ""
                }`}
                onClick={cartToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </button>
            </li>
          </ul>
          <div className="header__mobile-nav">
            <button
              data-array-length={cartItems.length}
              className={`header__cart-mobile ${
                cartItems.length > 0 ? "header__cart-with-items" : ""
              }`}
              onClick={cartToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </button>
            <button
              className="header__bars"
              onClick={() => setMobileNav(!mobileNav)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
