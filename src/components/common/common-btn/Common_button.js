import React from 'react'
import './common_button.css'

const Common_button = (props) => {
  return (
    <>
      <div className='commonbtndiv'>
        <button 
          className='common-btn' 
          onClick={props.onClick}
        >
          <span>{props.name}</span>
        </button>
      </div>
    </>
  )
}

export default Common_button
