import "./banner.css";
import Img1 from "../../img/banners/banner.jpg";

function BannerMirrored() {
  return (
    <section className="banner container section">
      <div className="banner__wrapper">
        <div className="banner__img">
          <img src={Img1} alt="banner" />
        </div>
        <div className="banner__description">
          <h2 className="banner__description-title">
            Discover your perfect pair
          </h2>
          <p className="banner__description-text">
            Step up your shoe game with Shoeshop! Browse our trendy footwear
            collection, shop with ease, and elevate your style.
          </p>
          <button className="banner__description-btn btn">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
}

export default BannerMirrored;
