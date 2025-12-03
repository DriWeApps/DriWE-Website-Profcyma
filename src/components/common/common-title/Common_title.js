import React from 'react'
import './common-title.css'

const Common_title = (props) => {
    return (
        <>
            <div className='common_title_div'>
                <h3 className='title'>{props.title}<span>{props.specialtext}</span></h3>
                <p className='subtitle'>{props.subtitle}</p>
            </div>
        </>
    )
}

export default Common_title