import React from 'react'
import SectionTitle from '../sectionTitle'
import { Col, Row } from "react-bootstrap";
import Chart from './Chart';
import token from '../../assets/img/logo/khubero.png'
import ChartData from './ChartData';

const Tokenomics = () => {
  return (
    <div className='' id='tokenomics'>
        <div className="padding-block">
            <SectionTitle title="TOKENOMICS" />
        </div>

        <div className="tokenomics-wrap bg-black">
            <Row className='align-items-center'>
                <Col xl='6'>
                    <div className="chart-bg">
                        <Chart />

                        <div className="token-circle">
                            <img src={token} alt="" />
                        </div>
                    </div>
                </Col>

                <Col xl='6'>
                    <ChartData />
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Tokenomics