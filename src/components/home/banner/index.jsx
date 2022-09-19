import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Banner = () => {
  return (
    <div className='banner-wrap padding-inline' id='home'>
      <Row className='align-items-center gy-4'>
        <Col lg={8}>
          <h2 className="banner-text">experIEnce the</h2>
          <h2 className="bordered-heading">metaverse</h2>

          <p className="banner-content">Making virtual land buying, selling, and renting a hassle-free experience</p>
        </Col>

        <Col lg={4}>
          <div className="d-flex align-items-center justify-content-lg-end">
            <div className="banner-btn">Enter Metaverse</div>
          </div>
        </Col>
      </Row>
        
    </div>
  )
}

export default Banner