import About from "../about";
import Banner from "../banner";
import Characteristics from "../characteristics";
import Coin from "../coin";
import Subscribe from "../subscribe";
import Team from "../team";
import Tokenomics from "../tokenomics";
import { Title } from "../util";
import Loader from '../loader'
import Insights from "../insights";
import Metaverse from "../metaverse";

const Home = () => {
  return (
    <div className="home-page">
      <Loader />
      <Banner />
      <Insights />
      <Metaverse />
      {/* <About /> */}
      <Characteristics />
      {/* <Tokenomics /> */}
      <Team />
      {/* <Coin /> */}
      <Subscribe />
   </div>
  );
};

export default Home;
