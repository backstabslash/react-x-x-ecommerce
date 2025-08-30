import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './categories-header.css';

function CategoriesHeader({ passFilter }) {
  // State
  const [filter, setFilter] = useState('All');

  // Category Filter
  useEffect(() => {
    passFilter(filter);
  }, [filter]);

  return (
    <>
      <section className="categories-categories container section">
        <div className="categories__header">
          <div className="categories__header-filters">
            <button className="categories__header-filters-btn" onClick={() => setFilter('All')}>
              All
            </button>
            <button
              className="categories__header-filters-btn"
              onClick={() => setFilter('Sneakers')}
            >
              Sneakers
            </button>
            <button
              className="categories__header-filters-btn"
              onClick={() => setFilter('Slippers')}
            >
              Slippers
            </button>
            <button className="categories__header-filters-btn" onClick={() => setFilter('Boots')}>
              Boots
            </button>
            <button className="categories__header-filters-btn" onClick={() => setFilter('Loafers')}>
              Loafers
            </button>
          </div>
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
              Home
            </Link>
            <h3 className="categories__header-current-subtitle">{filter}</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoriesHeader;
