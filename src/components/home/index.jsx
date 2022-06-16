import { Col, Row } from "react-bootstrap";
import illus from '../../assets/img/illus/illus.png';

const Home = () => {
  return (
    <div className="interview-wrap">
      <Row className="gy-5">
        <Col lg={6} md={7}>
          <div className="banner-content-wrap">
            <h2 className="banner-heading title-72">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>

            <p className="banner-content text-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <a href="instructions">
              <div className="btn-wrap">
                <button className="main-btn"> </button>
                <button className="btn-circle text-24">
                  Start Interview
                  <svg
                    width="22"
                    height="15"
                    viewBox="0 0 22 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7.5H21M21 7.5L14.7615 1M21 7.5L14.7615 14"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </a>
          </div>
        </Col>

        <Col lg={6} md={5}>
          <div className="img-wrap">
            <img src={illus} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
