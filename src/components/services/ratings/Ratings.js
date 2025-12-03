import React from 'react'
import './ratings.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Ratings = () => {
  return (
    <>
        <section className='Ratings_sec'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 mb-3'>
                        <div className='rating_div'>
                            <h1 className='h1rate'>4.3/5<FontAwesomeIcon icon={faStar} /></h1>
                        </div>
                    </div>
                    <div className='col-lg-8 mb-3'>
                        <div className='right_div'>
                            <h4 className='overh4'>Over 6 million journeys & counting</h4>
                            <p className='disp'>Discover our trust score and <br></br>customer reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Ratings