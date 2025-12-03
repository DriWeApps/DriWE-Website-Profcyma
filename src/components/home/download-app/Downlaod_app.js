import React from 'react'
import './download_app.css'

const Downlaod_app = () => {
  return (
    <>
        <section className='Downlaod_app_sec'>
            <div className='container'>
                <img className='download-banner' src={process.env.PUBLIC_URL + '/assets/images/home/download-app/download.png'} />
            </div>
        </section>
    </>
  )
}

export default Downlaod_app