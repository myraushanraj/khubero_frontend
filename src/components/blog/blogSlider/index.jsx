import React from "react";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import SectionTitle from "../../sectionTitle";
import { Col, Row } from "react-bootstrap";
import blogImg from "../../../assets/img/banners/blog.png";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.74756 14.7646L8.46189 8.05027L1.74756 1.33594" stroke="black" stroke-width="1.91838" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.74756 14.7646L8.46189 8.05027L1.74756 1.33594" stroke="black" stroke-width="1.91838" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
  );
}

const BlogSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="blog-slider padding-inline padding-block">
      <SectionTitle title="Our Blogs" />

      <Slider {...settings}>
        <div>
          <div className="dark-card-wrap">
            <Row>
              <Col md="4">
                <div className="blog-img-wrap">
                  <img src={blogImg} alt="" />
                </div>
              </Col>
              <Col md="8">
                <h3 className="dark-card-title">
                  Total Sales for Virtual Property in Metverse reached $500
                  Million
                </h3>
                <p className="dark-card-desc mt-4">
                  Metaverse real estate scored $500 million in sales in 2021 and
                  is expected to double in 2022. According to the analytic...
                  See more
                </p>
              </Col>
            </Row>
          </div>
        </div>

        <div>
          <div className="dark-card-wrap">
            <Row>
              <Col md="4">
                <div className="blog-img-wrap">
                  <img src={blogImg} alt="" />
                </div>
              </Col>
              <Col md="8">
                <h3 className="dark-card-title">
                  Total Sales for Virtual Property in Metverse reached $500
                  Million
                </h3>
                <p className="dark-card-desc mt-4">
                  Metaverse real estate scored $500 million in sales in 2021 and
                  is expected to double in 2022. According to the analytic...
                  See more
                </p>
              </Col>
            </Row>
          </div>
        </div>

        <div>
          <div className="dark-card-wrap">
            <Row>
              <Col md="4">
                <div className="blog-img-wrap">
                  <img src={blogImg} alt="" />
                </div>
              </Col>
              <Col md="8">
                <h3 className="dark-card-title">
                  Total Sales for Virtual Property in Metverse reached $500
                  Million
                </h3>
                <p className="dark-card-desc mt-4">
                  Metaverse real estate scored $500 million in sales in 2021 and
                  is expected to double in 2022. According to the analytic...
                  See more
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BlogSlider;
