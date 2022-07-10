import React from 'react'
import SectionTitle from '../sectionTitle'
import {Row, Col} from 'react-bootstrap';
import ContentTitle from '../contentTitle';
import solutionBanner from '../../assets/img/banners/solution.png'

const About = () => {
  return (
    <div className='about-section padding-inline' id='vision'>
        <SectionTitle title="About Us" />
        <div className="padding-block ">
            <Row className='gx-5 align-items-center'>
                <Col xl={6}>
                    <ContentTitle title="Vision" />

                    <p className="content">Khubero is a Blockchain based Real Estate Platform that focuses on acquisition, arrangement, managing and developing of Virtual Real Estate properties. We are truly decentralizing the way metaverse properties are bought and sold by providing retail investors with the platform to invest in these real estate holdings through significantly reduced ticket sizes. We partner with Developers and Architects for building the land purchased, Realtors for helping with marketing of those properties and Retail brands for tie-ups.</p>
                </Col>

                <Col xl="6">
                    <div className="solution-wrap">
                        <ContentTitle title="Solutions" />
                        <p>For KHUBERO Virtual Estate Investor</p>

                        <div className="solution-banner-wrap">
                            <img src={solutionBanner} alt="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default About