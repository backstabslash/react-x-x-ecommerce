import "./home.css";
// import { Link } from "react-router-dom";
import SneakersImg from "../../img/home/1.png";
import SlippersImg from "../../img/home/2.png";
import BootsImg from "../../img/home/3.png";
import LoafersImg from "../../img/home/4.png";

function Home() {
  return (
    <section className="home container section">
      <div className="home__img-container">
        <div className="home__img-wrapper grid-one">
          <a href="">
            <div className="home__img-overlay"></div>
            <img src={SneakersImg} alt="sneakers" />
            <p className="home__img-description">Sneakers</p>
          </a>
        </div>
        <div className="home__img-wrapper grid-two">
          <a href="">
            <div className="home__img-overlay"></div>
            <img src={SlippersImg} alt="slippers" />
            <p className="home__img-description">Slippers</p>
          </a>
        </div>
        <div className="home__img-wrapper grid-three">
          <a href="">
            <div className="home__img-overlay"></div>
            <img src={BootsImg} alt="boots" />
            <p className="home__img-description">Boots</p>
          </a>
        </div>
        <div className="home__img-wrapper grid-three-low">
          <a href="">
            <div className="home__img-overlay"></div>
            <img src={LoafersImg} alt="loafers" />
            <p className="home__img-description">Loafers</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
