import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import ContentTitle from '../../contentTitle'
import SectionTitle from '../../sectionTitle'

const Characteristics = () => {
  return (
    <div className='pb-0 padding-inline ' id='characteristics'>
        <SectionTitle title="Why Khubero?" />

        <div className="padding-block pt-5">
          <p>The multiple land holdings of Khubero across numerous metaverses have been compressed in the form of Khubero coin which users can buy at very minimal prices. With our team of industry veternans from diverse backgrounds we insure to invest in the best possible land parcels. </p>

          <div className="section-btn-wrap">
              <div className="btn-decoration-line"></div>

              <div className="double-button-wrap">
                  <a title="whitepaper" href="https://statickhubero.s3.ap-south-1.amazonaws.com/_Khubero+Whitepaper+V1.pdf" target="_blank" className='border-btn'>Whitepaper <FontAwesomeIcon icon={faChevronRight} /> </a>
                  <div className="border-gradient-btn"></div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Characteristics