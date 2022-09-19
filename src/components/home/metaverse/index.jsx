import React from "react";
import SectionTitle from "../../sectionTitle";
import { Row, Col } from "react-bootstrap";
import ContentTitle from "../../contentTitle";
import { Link } from "react-router-dom";
import coin from "../../../assets/img/logo/khubero-coin.png";

const Metaverse = () => {
  return (
    <div id="get-coin">
      <SectionTitle title="How Khubero enters the Metaverse?" />

      <div className="padding-block coin-content-wrap">
        <div className="padding-inline">
          <Row>
            <Col lg="7">
              <p className="buy-content text-justify">
                Khubero is a completely decentralized virtual world where one
                can leverage virtual real estate via the method tokenization.
                Through the disruptive KBR coin, investors get exposure to
                multiple metaverse land holding at very minimal prices. Khubero
                mobilizes these land holdings to develop various economically
                lucrative projects on it, which will ensure maximum returns to
                investors. Not just that Khubero also employs the traditional
                buy and hold strategy to ensure returns for the investors.{" "}
              </p>
            </Col>

            <Col
              lg={5}
              className="d-flex justify-content-center justify-content-lg-end"
            >
              <img src={coin} alt="" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Metaverse;
