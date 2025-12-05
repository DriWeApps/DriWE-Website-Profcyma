import React from 'react'
import './get_started.css'

const Get_started = () => {
    return (
        <>
            <section className='Get_started_sec'>
                <div className='container'>
                    <div className='img_div'>
                        <img
                            className='getbanner'
                            src={process.env.PUBLIC_URL + '/assets/images/home/get-started/banner.png'}
                            alt="Get Started Banner"
                        />

                        {/* QR codes inside banner right side */}
                        <div className="qr_container">
                            <div className="qr_box">
                                <img
                                    src={process.env.PUBLIC_URL + '/assets/images/home/get-started/PlayStore QR Code.png'}
                                    alt="Android QR"
                                />
                                <p>Android</p>
                            </div>

                            <div className="qr_box">
                                <img
                                    src={process.env.PUBLIC_URL + '/assets/images/home/get-started/IOS QR Code.jpg'}
                                    alt="iOS QR"
                                />
                                <p>iOS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Get_started

