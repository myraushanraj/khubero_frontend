import React from 'react'

const DarkCard = (props) => {
  return (
    <div className='dark-card-wrap'>
      <h3 className="dark-card-title">{props.title}</h3>

      <p className="dark-card-desc">{props.desc}</p>
    </div>
  )
}

export default DarkCard
