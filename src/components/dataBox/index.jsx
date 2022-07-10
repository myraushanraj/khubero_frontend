import React from 'react'

const DataBox = (props) => {
  return (
    <div className='data-box'>
        <div className="data-title">
            <p>{props.title}</p>
        </div>
        <h3 className="data-value">{props.value}</h3>
    </div>
  )
}

export default DataBox