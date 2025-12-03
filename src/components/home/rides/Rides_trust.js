import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Rides_trust.css'
import Common_title from '../../common/common-title/Common_title'

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Rides_trust = () => {
  // Create state for the active testimonial
  const [activeTestimonial, setActiveTestimonial] = useState({
    image: '/assets/images/home/testimonials/person1.png',
    review: "Driwe is a game-changer! Booking a cab or sending a package has never been this easy. Super reliable and affordable. I use it for both rides and deliveries — works perfectly every time!",
    name: "Ayesha R., Mumbai",
    position: "- IT department"
  });

  // Testimonials data array
  const testimonials = [
    {
      id: 1,
      thumbImage: '/assets/images/home/testimonials/person1.png',
      mainImage: '/assets/images/home/testimonials/person1.png',
      review: "Driwe is a game-changer! Booking a cab or sending a package has never been this easy. Super reliable and affordable. I use it for both rides and deliveries — works perfectly every time!",
      name: "Ayesha R., Mumbai",
      position: "- IT department"
    },
    {
      id: 2,
      thumbImage: '/assets/images/home/testimonials/person2.png',
      mainImage: '/assets/images/home/testimonials/person2.png', // You should add different images
      review: "I rely on Driwe for my daily commute. The drivers are professional and the app is so easy to use. Plus, their delivery service saved me when I forgot important documents at home!",
      name: "Rahul K., Delhi",
      position: "- Marketing Executive"
    },
    {
      id: 3,
      thumbImage: '/assets/images/home/testimonials/person3.png',
      mainImage: '/assets/images/home/testimonials/person3.png', // You should add different images
      review: "As a small business owner, Driwe's delivery service has been invaluable. Affordable rates and reliable service have helped me expand my customer base significantly.",
      name: "Priya M., Bangalore",
      position: "- Boutique Owner"
    },
    {
      id: 4,
      thumbImage: '/assets/images/home/testimonials/person1.png',
      mainImage: '/assets/images/home/testimonials/person1.png', // You should add different images
      review: "The safety features in Driwe give me peace of mind when my daughter uses it for her college commute. The ride-sharing option is also great for saving money.",
      name: "Vikram S., Hyderabad",
      position: "- School Teacher"
    },
    {
      id: 5,
      thumbImage: '/assets/images/home/testimonials/person2.png',
      mainImage: '/assets/images/home/testimonials/person2.png', // You should add different images
      review: "I've tried many ride-hailing apps, but Driwe stands out for its customer service. When I had an issue, they resolved it immediately. Highly recommended!",
      name: "Neha P., Pune",
      position: "- Software Developer"
    }
  ];

  // Function to handle click on thumbnail
  const handleThumbClick = (testimonial) => {
    setActiveTestimonial({
      image: testimonial.mainImage,
      review: testimonial.review,
      name: testimonial.name,
      position: testimonial.position
    });
  };

  return (
    <>
      <section className='Rides_trust_section'>
        <div className='container'>
          <Common_title specialtext={'Rides. Deliveries. Trust.'} subtitle={'Hear how Driwe makes everyday travel & transport easier for our users.'} />

          <div className='slider-sec'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='main_person'>
                  <img
                    className='mapars'
                    src={process.env.PUBLIC_URL + activeTestimonial.image}
                    alt={activeTestimonial.name}
                  />
                </div>
              </div>
              <div className='col-lg-8'>
                <div className='content_sec'>
                  <div className='cli-rev-dev'>
                    <img className='lay1' src={process.env.PUBLIC_URL + '/assets/images/home/testimonials/lay1.png'} alt="Decoration" />
                    <p className='review'>{activeTestimonial.review}</p>
                    <p className='name'>{activeTestimonial.name}</p>
                    <p className='position'>{activeTestimonial.position}</p>
                    <img className='lay2' src={process.env.PUBLIC_URL + '/assets/images/home/testimonials/lay2.png'} alt="Decoration" />
                  </div>

                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                      '0': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                      '768': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                      '991': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                      '1400': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                    }}
                    className="mySwiper">
                    {testimonials.map((testimonial) => (
                      <SwiperSlide key={testimonial.id}>
                        <div
                          className='slide_div'
                          onClick={() => handleThumbClick(testimonial)}
                        >
                          <img
                            className='personimg'
                            src={process.env.PUBLIC_URL + testimonial.thumbImage}
                            alt={`Thumbnail ${testimonial.name}`}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Rides_trust;