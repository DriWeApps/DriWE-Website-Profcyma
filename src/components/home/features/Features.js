// import React, { useEffect, useRef, useState } from 'react';
// import './features.css'
// import Common_title from '../../common/common-title/Common_title'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import Common_button from '../../common/common-btn/Common_button';

// const Features = () => {

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add("in-view");
//                     } else {
//                         entry.target.classList.remove("in-view");
//                     }
//                 });
//             },
//             { threshold: 0.3 }
//         );

//         document.querySelectorAll(".Features_sec .features_slider_sec .yellowslider").forEach((el) => {
//             observer.observe(el);
//         });

//         document.querySelectorAll(".Features_sec .features_slider_sec .pinkslider").forEach((el) => {
//             observer.observe(el);
//         });

//         return () => observer.disconnect();
//     }, []);

//     return (
//         <>
//             <section className='Features_sec'>
//                 <div className='container'>
//                     <Common_title specialtext={'Powerful Features. Simple Experience.'} subtitle={'Everything you need for seamless rides and smart transport — all in one app.'} />

//                     <div className='features_slider_sec'>
//                         <Swiper
//                             navigation={true}
//                             modules={[Navigation]}
//                             className="mySwiper"
//                             // centeredSlides={true}
//                             loop={true}
//                             breakpoints={{
//                                 '0': {
//                                     slidesPerView: 1,
//                                     spaceBetween: 10,
//                                 },
//                                 '768': {
//                                     slidesPerView: 2,
//                                     spaceBetween: 10,
//                                 },
//                                 '991': {
//                                     slidesPerView: 3,
//                                     spaceBetween: 10,
//                                 },
//                                 '1400': {
//                                     slidesPerView: 3,
//                                     spaceBetween: 10,
//                                 },
//                             }}
//                         >

//                             <SwiperSlide>
//                                 <div className='slider-div pinkslider'>
//                                     <div className='icondiv'>
//                                         <img className='icon' src={process.env.PUBLIC_URL + '/assets/images/home/features/pink.png'} />
//                                     </div>
//                                     <div className='contentdiv'>
//                                         <h5 className='slider-title'>Safe & Trusted</h5>
//                                         <p className='features'>Your safety is our top priority. Every Driwe driver is professionally vetted and trained to ensure a secure experience. Enjoy peace of mind with in-app driver profiles, ratings, and trip sharing options for extra reassurance.</p>
//                                     </div>

//                                 </div>
//                             </SwiperSlide>

//                             <SwiperSlide>
//                                 <div className='slider-div pinkslider'>
//                                     <div className='icondiv'>
//                                         <img
//                                             className='photo-icon'
//                                             src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/faceRecog1.jpg'}
//                                             alt="Face Recognition"
//                                         />
//                                     </div>
//                                     <div className='contentdiv'>
//                                         <h5 className='slider-title'>Face Recognition</h5>
//                                         <p className='features'>
//                                             Experience enhanced security with AI-powered face recognition technology.
//                                             DriWE verifies driver identity before every ride, ensuring only authorized and
//                                             validated drivers operate under the platform. Smart innovation, real safety.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>

//                             <SwiperSlide>
//                                 <div className='slider-div yellowslider'>
//                                     <div className='icondiv'>
//                                         <img
//                                             className='icon'
//                                             src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/SOS.png'}
//                                             alt="SOS Feature"
//                                         />
//                                     </div>

//                                     <div className='contentdiv'>
//                                         <h5 className='slider-title'>SOS Emergency Button</h5>
//                                         <p className='features'>
//                                             Safety at your fingertips. Instantly alert emergency contacts and local authorities
//                                             with the in-app SOS button. Share live ride location and get immediate assistance
//                                             when needed — fast, secure, and reliable.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <div className='slider-div yellowslider'>
//                                     <div className='icondiv'>
//                                         <img className='icon' src={process.env.PUBLIC_URL + '/assets/images/home/features/yellow.png'} />
//                                     </div>
//                                     <div className='contentdiv'>
//                                         <h5 className='slider-title'>Live Tracking</h5>
//                                         <p className='features'>Stay informed with real-time tracking
//                                             of your driver or delivery. See your ride approaching, monitor your delivery route, & know exactly when it arrives.— all from the app. Transparency and control, right in your pocket.
//                                         </p>
//                                     </div>

//                                 </div>
//                             </SwiperSlide>

//                         </Swiper>

//                     </div>

//                     <div className='downloadbtndiv'>
//                         <Common_button
//                             name={'Download App'}
//                             onClick={() => window.open("https://play.google.com/store/apps/details?id=com.driwe", "_blank")}
//                         />
//                     </div>

//                 </div>
//             </section>
//         </>
//     )
// }

// export default Features


import React, { useEffect } from 'react';
import './features.css'
import Common_title from '../../common/common-title/Common_title'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Common_button from '../../common/common-btn/Common_button';

const Features = () => {

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

        document.querySelectorAll(".Features_sec .features_slider_sec .yellowslider").forEach((el) => observer.observe(el));
        document.querySelectorAll(".Features_sec .features_slider_sec .pinkslider").forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className='Features_sec'>
            <div className='container'>
                <Common_title
                    specialtext={'Powerful Features. Simple Experience.'}
                    subtitle={'Everything you need for seamless rides and smart transport — all in one app.'}
                />

                <div className='features_slider_sec'>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        loop={true}
                        breakpoints={{
                            '0': { slidesPerView: 1, spaceBetween: 10 },
                            '768': { slidesPerView: 2, spaceBetween: 10 },
                            '991': { slidesPerView: 3, spaceBetween: 10 },
                            '1400': { slidesPerView: 3, spaceBetween: 10 },
                        }}
                    >

                        {/* Safe & Trusted */}
                        <SwiperSlide>
                            <div className='slider-div pinkslider'>
                                <div className='icondiv'>
                                    <img className='icon' src={process.env.PUBLIC_URL + '/assets/images/home/features/pink.png'} />
                                </div>
                                <div className='contentdiv'>
                                    <h5 className='slider-title'>Safe & Trusted</h5>
                                    <p className='features'>Your safety is our top priority. Every Driwe driver is professionally vetted and trained to ensure a secure experience. Enjoy peace of mind with in-app driver profiles, ratings, and trip sharing options for extra reassurance.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Face Recognition */}
                        <SwiperSlide>
                            <div className='slider-div pinkslider'>
                                <div className='icondiv'>
                                    <img
                                        className='photo-icon'
                                        src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/faceRecog1.jpg'}
                                        alt="Face Recognition"
                                    />
                                </div>
                                <div className='contentdiv'>
                                    <h5 className='slider-title'>Face Recognition</h5>
                                    <p className='features'>
                                        Experience enhanced security with AI-powered face recognition technology.
                                        DriWE verifies driver identity before every ride, ensuring only authorized and
                                        validated drivers operate under the platform. Smart innovation, real safety.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* SOS Emergency */}
                        <SwiperSlide>
                            <div className='slider-div yellowslider'>
                                <div className='icondiv'>
                                    <img
                                        className='icon sos-icon'
                                        src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/SOS.png'}
                                        alt="SOS Feature"
                                    />
                                </div>
                                <div className='contentdiv'>
                                    <h5 className='slider-title'>SOS Emergency Button</h5>
                                    <p className='features'>
                                        Safety at your fingertips. Instantly alert emergency contacts and local authorities
                                        with the in-app SOS button. Share live ride location and get immediate assistance
                                        when needed — fast, secure, and reliable.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Live Tracking */}
                        <SwiperSlide>
                            <div className='slider-div yellowslider'>
                                <div className='icondiv'>
                                    <img className='icon' src={process.env.PUBLIC_URL + '/assets/images/home/features/yellow.png'} />
                                </div>
                                <div className='contentdiv'>
                                    <h5 className='slider-title'>Live Tracking</h5>
                                    <p className='features'>
                                        Stay informed with real-time tracking of your driver or delivery. See your ride approaching, monitor your delivery route, & know exactly when it arrives.— all from the app. Transparency and control, right in your pocket.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className='downloadbtndiv'>
                    <Common_button
                        name={'Download App'}
                        onClick={() => window.open("https://play.google.com/store/apps/details?id=com.driwe", "_blank")}
                    />
                </div>
            </div>
        </section>
    )
}

export default Features;
