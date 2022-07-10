import React from 'react'
import {Row, Col} from 'react-bootstrap'
import ContentTitle from '../contentTitle'

const ContentArea = () => {
  return (
    <Row className='g-5'>
        <Col md='4'>
            <ContentTitle title="blog" />

            <p className="subscribe-content">Fresh takes, guides and new persperctive on the metaverse to help you stay up to date on this evolving websape</p>
        </Col>

        <Col md='4'>
            <ContentTitle title="newsletter" />

            <p className="subscribe-content">Weekly metaverse and web3 news, highlights, and trends, delivered right to your inbox.</p>
        </Col>

        <Col md='4'>
            <ContentTitle title="events" />

            <p className="subscribe-content">IRL and digital events that bring the metaverse to life by bridging communities.</p>
        </Col>
    </Row>
  )
}

export default ContentArea