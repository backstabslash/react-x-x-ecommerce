import { useState } from "react";
import { Link } from "react-router-dom";
import "./categories-header.css";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <section className="categories-categories container section">
        <div className="categories__header">
          <div className="categories__header-current">
            <Link
              className="categories__header-home-link"
              onClick={() => window.scrollTo(0, 0)}
              to="/"
            >
              <button className="categories__header-home-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              HOME
            </Link>
            <div className="categories__header-filters">
              <button className="categories__header-filters-btn">All</button>
              <button className="categories__header-filters-btn">
                Sneakers
              </button>
              <button className="categories__header-filters-btn">
                Slippers
              </button>
              <button className="categories__header-filters-btn">Boots</button>
              <button className="categories__header-filters-btn">
                Loafers
              </button>
            </div>
            <h3 className="categories__header-current-subtitle">ALL</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoriesHeader;
