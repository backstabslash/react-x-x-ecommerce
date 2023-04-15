import "./banner.css";

function Banner() {
  return (
    <section className="banner container section">
      <div className="banner__wrapper">
        <div className="banner__description">
          <h2 className="banner__description-title">
            Step into something new today
          </h2>
          <p className="banner__description-text">
            Step up your shoe game with our extensive collection of trendy
            footwear - shop now at Shoeshop and step out in style!
          </p>
          <button className="banner__description-btn btn">SHOP NOW</button>
        </div>
        <div className="banner__img">
          <img src="./banner.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
