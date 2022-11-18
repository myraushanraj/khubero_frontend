import React from 'react'
import SectionTitle from '../../sectionTitle'
import bg_pattern from '../../../assets/img/banners/wave-bg.png'

const BlogBanner = () => {
  return (
    <>
      <div className='padding-inline blog-banner'>
          <SectionTitle title="Follow the BluePrint today." />

          <div className="padding-block pt-5">
            <p>A blueprint for something is a plan or set of proposals that shows how it is expected to work. A blueprint is a guide for making something — it's a design or pattern that can be followed.</p>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center">
              <h4 className="blog-newsletter-title">Become part of an ever growing community</h4>

              <input type="email" className="form-control w-xl-25 w-md-50 w-75 mb-3" placeholder='Email address' />
              <button className='banner-btn btn'>SUBCRIBE</button>
          </div>
      </div>

      <div className="position-relative blog-pattern">
        <img src={bg_pattern} alt="" className='bg-pattern' />
      </div>

      <div className='insight-section padding-inline padding-blog'>
        <SectionTitle title="What the BluePrint has to offer" />
        <p className='pt-5 mt-5'>Expand your metaverse virtual estate knowledge with detailed blogs, click-worthy newsletters, and phygital metaverse events. The industry’s top tech wizards and virtual real estate advocates offer their best advice, how-to’s, and insights. You get all this in the name of helping you to level up your virtual real estate knowledge. </p>
      </div>
    </>
  )
}

export default BlogBanner
