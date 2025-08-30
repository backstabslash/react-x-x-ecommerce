import Home from '../components/home/home';
import Proud from '../components/proud/proud';
import Banner from '../components/banner/banner';
import Trending from '../components/trending/trending';
import BannerMirrored from '../components/banner/bannerMirrored';

function HomePage() {
  return (
    <>
      <Home />
      <Proud />
      <Banner />
      <Trending />
      <BannerMirrored />
    </>
  );
}

export default HomePage;
