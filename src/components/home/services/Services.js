import React, { useEffect } from 'react'
import './services.css'
import Common_title from '../../common/common-title/Common_title'
import Common_button from '../../common/common-btn/Common_button'

const Services = () => {

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
    
        document.querySelectorAll(".Services_section .cabook_div ").forEach((el) => {
          observer.observe(el);
        });
    
        return () => observer.disconnect();
      }, []);

    return (
        <>
            <section className='Services_section'>
                <div className='container'>
                    <Common_title specialtext={'Services That Move You'} subtitle={'From quick cab bookings to reliable transport — we’ve got every route covered.'} />

                    <div className='cabook_div'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='img_div'>
                                    <img className='serviceimg' src={process.env.PUBLIC_URL + '/assets/images/home/services/services.png'} />
                                </div>
                            </div>
                            <div className='col-lg-6 my-auto'>
                                <div className='content_div'>
                                    <h1 className='cab-title'>Cab Booking <br></br>Service </h1>
                                    <p className='content'>Get a reliable ride anytime, anywhere. Our easy-to-use app connects you with professional drivers for quick, safe, and affordable trips whether it's a daily commute, airport transfer, or a night out. Just tap, book, and ride with confidence.</p>
                                    <Common_button name={'View Details'} link={'/services'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services