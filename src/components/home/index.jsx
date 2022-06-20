import { Col, Row } from "react-bootstrap";
import metaverse from '../../assets/img/svg/metaverse.svg';
import { Title } from "../util";

const Home = () => {
  return (
    <>
   <div className="section-1 row">
    <div className="col-12 text">
      <h2 className="experienc">experIEnce the </h2>
      <h2 className=""><img src={metaverse} alt="metaverse" /></h2>
      <p className="desc">AUTONOMOUSLY EARN YIELD THROUGH <br/>METAVERSE REAL ESTATE</p>
    </div>
   </div>

   <div className="row section-2">
      <div className="col-md-12">
          <Title text="ABOUT US" />
      </div>
   </div>
   </>
  );
};

export default Home;
