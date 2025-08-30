import './trending.css';
import TrendingItem from './trendingItem';
import { items } from '../data';

function Trending() {
  // Showing Elements 'til 9 Index
  const filteredItems = items.filter((item) => item.id <= 8);

  // Method to Move Component's Images with the Hidden Scroll to the Left
  const slideLeft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 256;
  };

  // Method to Move Component's Images with the Hidden Scroll to the Right
  const slideRight = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 256;
  };

  return (
    <section className="trending container section">
      <div className="trending__header">
        <h2 className="trending__header-title">Trending now </h2>
        <div className="trending__header-btns">
          <button className="trending__header-btn" title="scroll left" onClick={slideLeft}>
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button className=" trending__header-btn" title="scroll right" onClick={slideRight}>
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="trending__item-container" id="slider">
        {filteredItems.map((item) => (
          <TrendingItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Trending;
