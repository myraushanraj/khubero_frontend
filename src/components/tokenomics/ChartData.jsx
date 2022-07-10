import React from 'react'
import {Row, Col} from 'react-bootstrap';
import DataBox from '../dataBox';

const ChartData = () => {
  return (
    <Row className='g-5'>
        <Col md={6}>
            <DataBox title="Token Supply" value="500M" />
        </Col>

        <Col md={6}>
            <DataBox title="Marketing & development" value="12%" />
        </Col>

        <Col md={6}>
            <DataBox title="Diluted market cap" value="$498M" />
        </Col>

        <Col md={6}>
            <DataBox title="Reinvested" value="70%" />
        </Col>

        <Col md={6}>
            <DataBox title="Legal" value="3%" />
        </Col>

        <Col md={6}>
            <DataBox title="Locked tokens (Jan 2023)" value="378M" />
        </Col>
    </Row>
  )
}

export default ChartData