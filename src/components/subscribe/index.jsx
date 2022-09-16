import React from 'react'
import SectionTitle from '../sectionTitle'
import ContentArea from './ContentArea'
import NewsletterWrap from './NewsletterWrap'

const Subscribe = () => {
  return (
    <div className='' id='subscribe'>
        <SectionTitle title='Connect With Us' />

        <div className="">
            <ContentArea />
            <NewsletterWrap />
        </div>
    </div>
  )
}

export default Subscribe