import React from 'react'
import SectionTitle from '../sectionTitle'
import {Row, Col} from 'react-bootstrap'
import ContentTitle from '../contentTitle'
import { Link } from 'react-router-dom'
import coin from '../../assets/img/logo/khubero-coin.png'

const Coin = () => {
  return (
    <div id='get-coin'>
        <SectionTitle title="get our coin" />

        <div className="padding-block coin-content-wrap">
            <div className="coin-about padding-inline">
                <Row>
                    <Col md="6">
                        <ContentTitle title="HOW TO BUY" />

                        <p className="buy-content">You can buy Khubero token from DexSwap in exchange for ether. Click on the following link to buy the Khubero token:</p>

                        <Link to="/" className="but-link">click here</Link>
                    </Col>

                    <Col md={6} className="d-flex justify-content-center justify-content-md-end">
                        <img src={coin} alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}

export default Coin