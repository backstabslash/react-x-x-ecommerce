import "./banner.css";
import Img1 from "../../img/banners/banner.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="banner container section">
      <div className="banner__wrapper">
        <div className="banner__description">
          <h2 className="banner__description-title">Step into something new</h2>
          <p className="banner__description-text">
            Step up your shoe game with our extensive collection of trendy
            footwear - shop now at Shoeshop and step out in style!
          </p>
          <Link
            className="banner__description-btn btn"
            to="/categories"
            onClick={() => {
              window.top(0, 0);
            }}
          >
            SHOP NOW
          </Link>
        </div>
        <div className="banner__img">
          <img src={Img1} alt="banner" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
