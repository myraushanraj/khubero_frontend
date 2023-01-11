import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SectionTitle from '../../sectionTitle'
import DarkCard from './DarkCard'
import bg_pattern from '../../../assets/img/banners/wave-bg.png'

const Insights = () => {
  return (
    <div className='insight-section padding-inline position-relative'>
      <SectionTitle title="Metaverse Insights" />

      <img src={bg_pattern} alt="" className='bg-pattern'  id='insight'/>

      <Row className='g-5 insight-row'>
        <Col lg={3} md={6}>
            <DarkCard title="$500 Million" desc="in Total Sales reached for Virtual Property in Metaverse." />
        </Col>

        <Col lg={3} md={6}>
            <DarkCard title="$229 Million" desc="was the Total Volume for Virtual land in 2021." />
        </Col>

        <Col lg={3} md={6}>
            <DarkCard title="$1 Billion" desc="is about to hit for Virtual Real Estate in 2022." />
        </Col>

        <Col lg={3} md={6}>
            <DarkCard title="25000+" desc="Total wallets are those that interact with Virtual Estate." />
        </Col>
      </Row>
    </div>
  )
}

export default Insights
