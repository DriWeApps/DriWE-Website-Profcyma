import React from 'react'
import './common_button.css'
import { Link } from 'react-router-dom'

const Common_button = (props) => {
  return (
    <>
        <div className='commonbtndiv' onClick={props.onClick}>
            <Link to={props.link}><button className='common-btn'><span>{props.name}</span></button></Link>
        </div>
    </>
  )
}

export default Common_button