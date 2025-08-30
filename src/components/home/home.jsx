import './home.css';
import { Link } from 'react-router-dom';
import SneakersImg from '../../img/home/1.png';
import SlippersImg from '../../img/home/2.png';
import BootsImg from '../../img/home/3.png';
import LoafersImg from '../../img/home/4.png';

function Home() {
  return (
    <section className="home container section">
      <div className="home__img-container">
        <div className="home__img-wrapper grid-one">
          <Link to="/categories" onClick={() => window.top(0, 0)}>
            <div className="home__img-overlay"></div>
            <img src={SneakersImg} alt="sneakers" />
            <p className="home__img-description">Sneakers</p>
          </Link>
        </div>
        <div className="home__img-wrapper grid-two">
          <Link to="/categories" onClick={() => window.top(0, 0)}>
            <div className="home__img-overlay"></div>
            <img src={SlippersImg} alt="slippers" />
            <p className="home__img-description">Slippers</p>
          </Link>
        </div>
        <div className="home__img-wrapper grid-three">
          <Link to="/categories" onClick={() => window.top(0, 0)}>
            <div className="home__img-overlay"></div>
            <img src={BootsImg} alt="boots" />
            <p className="home__img-description">Boots</p>
          </Link>
        </div>
        <div className="home__img-wrapper grid-three-low">
          <Link to="/categories" onClick={() => window.top(0, 0)}>
            <div className="home__img-overlay"></div>
            <img src={LoafersImg} alt="loafers" />
            <p className="home__img-description">Loafers</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
