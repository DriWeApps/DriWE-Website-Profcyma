import React from 'react'
import './get_started.css'

const Get_started = () => {
    return (
        <>
            <section className='Get_started_sec'>
                <div className='container'>
                    <div className='img_div'>
                        <img className='getbanner' src={process.env.PUBLIC_URL + '/assets/images/home/get-started/banner.png'} />
                        <img className='qr_pic' src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/PlayStore QR Code.png'} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Get_started