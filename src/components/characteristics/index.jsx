import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import ContentTitle from '../contentTitle'
import SectionTitle from '../sectionTitle'

const Characteristics = () => {
  return (
    <div className='padding-inline' id='characteristics'>
        <SectionTitle title="why us" />

        <div className="padding-block pt-5">
          <ContentTitle title="Characteristics" />
          <p>We partner with those brands and emerging startups which can offer something unique to the metaverse and by connecting with industry leading architects and designers we develop properties that will stand out among the lot attracting huge users and economic opportunities alike. </p>

          <div className="section-btn-wrap">
              <div className="btn-decoration-line"></div>

              <div className="double-button-wrap">
                  <a href="https://core-images-back.s3.ap-south-1.amazonaws.com/Copy+of+Khubero+Whitepaper.pdf" target="_blank" className='border-btn'>Whitepaper <FontAwesomeIcon icon={faChevronRight} /> </a>
                  <div className="border-gradient-btn"></div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Characteristics