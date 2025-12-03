import React, { useEffect } from 'react'
import './Service_content.css'
import Common_title from '../../common/common-title/Common_title'

const Service_content = () => {

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
              } else {
                entry.target.classList.remove("in-view");
              }
            });
          },
          { threshold: 0.3 }
        );
    
        document.querySelectorAll(".Service_content_sec .content-div .banner-div").forEach((el) => {
          observer.observe(el);
        });
    
        return () => observer.disconnect();
      }, []);

    return (
        <>
            <div className='container'>
                <div className='Service_content_sec'>
                    <Common_title specialtext={'Services that move you'} subtitle={'From quick cab bookings to reliable transport — we’ve got every route covered.'} />

                    <div className='content-div'>
                        <div className='row'>
                            <div className='col-lg-10 mx-auto'>
                                <div className='row'>
                                    <div className='col-lg-5'>
                                        <div className='left-sec'>
                                            <p className='one'><span>01</span></p>
                                            <p className='cabtitle'>Cab <br></br>Booking Service</p>
                                            <p className='content'>Get a reliable ride anytime, anywhere.
                                                our easy-to-use app connects you with
                                                professional drivers for quick, safe, and
                                                affordable trips whether it's a daily
                                                commute, airport transfer, or a night out.
                                                Just tap, book, and ride with confidence.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-7'>
                                        <div className='banner-div'>
                                            <img className='banner-img' src={process.env.PUBLIC_URL + '/assets/images/services/service-content/banner.png'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service_content