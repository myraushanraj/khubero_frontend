import React from 'react'
import SectionTitle from '../sectionTitle'
import ContentArea from './ContentArea'
import NewsletterWrap from './NewsletterWrap'

const Subscribe = () => {
  return (
    <div className='padding-inline' id='subscribe'>
        <SectionTitle title='HEY WAIT ! SUBSCRIBE' />

        <div className="padding-block">
            <ContentArea />
            <NewsletterWrap />
        </div>
    </div>
  )
}

export default Subscribe