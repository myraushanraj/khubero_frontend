import About from "../about";
import Banner from "../banner";
import Characteristics from "../characteristics";
import Coin from "../coin";
import Subscribe from "../subscribe";
import Team from "../team";
import Tokenomics from "../tokenomics";
import { Title } from "../util";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <About />
      <Characteristics />
      <Tokenomics />
      <Team />
      <Coin />
      <Subscribe />
   </div>
  );
};

export default Home;
