import React from 'react'
import './About_content.css'
import Common_title from '../../common/common-title/Common_title'

const About_content = () => {
    return (
        <>
            <div className='container'>
                <div className='About_content_sec'>
                    <div className='row'>
                        <div className='col-md-10 mx-auto'>
                            <Common_title specialtext={'About us'} subtitle={'The Power Behind Every Ride and Delivery'} />
                            <div className='contentdiv'>
                                <p className='content bold'>At Driwe, we're reimagining the way cities move. Whether you're heading across town or sending a package across the city, we deliver fast, safe, and affordable solutions — all from one easy-to-use app.
                                </p>
                                <p className='content'>Our platform connects you with verified drivers and transport partners, ensuring every ride and delivery is smooth, secure, and reliable. From daily commutes to last-minute logistics, Driwe is your go-to for getting things and people where they need to be. Built on the pillars of safety, convenience, and transparency, we’re constantly evolving to meet the needs of modern life. Join the growing community that trusts Driwe to move with confidence anytime, anywhere. Driwe is on a mission to transform urban mobility by offering integrated transport solutions for both people and goods. Our app bridges the gap between personal travel and logistics, delivering speed, safety, and affordability in every booking.
                                </p>
                                <p className='content'>We partner with rigorously screened drivers and transport professionals to ensure every journey and delivery is handled with care. From on-demand cab rides to dependable package transport, Driwe is built to support the rhythm of modern city life. Our focus on technology, trust, and transparency drives us to continually improve the way urban transport works — making it more accessible, efficient, and reliable for all.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About_content

