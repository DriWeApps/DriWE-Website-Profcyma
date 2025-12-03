import React, { useEffect } from "react";
import "./why-choose.css";
import Common_title from "../../common/common-title/Common_title";
import Bg_animation from "./Bg_animation";

const Why_choose = () => {
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
      { threshold: 0.4 }
    );

    const elements = document.querySelectorAll(
      ".Why_choose_section .contentdiv"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="Why_choose_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <Common_title
                title={"Why Choose Dri"}
                specialtext={"WE?"}
                subtitle={
                  "Because you deserve fast, safe, & reliable rides anytime, anywhere"
                }
              />

              <div className="contentdiv">
                <div className="row">
                  <div className="col-md-4">
                    <div className="left_sec">
                      <div className="choose_box">
                        <h1 className="number">01</h1>
                        <p className="whytitle">All-in-One App</p>
                        <p className="content">
                          Book rides or transport goods <br></br> all in one
                          place.
                        </p>
                      </div>

                      <div className="choose_box">
                        <h1 className="number">02</h1>
                        <p className="whytitle">Fast & Easy Booking</p>
                        <p className="content">
                          Get moving in just a<br></br> few taps.
                        </p>
                      </div>

                      <div className="choose_box">
                        <h1 className="number">03</h1>
                        <p className="whytitle">Trusted Drivers</p>
                        <p className="content">
                          Verified professionals for<br></br>
                          safe, reliable service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mid_sec">
                      <img
                        className="mockupimg"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/home/why-choose/mockup.png"
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="right_sec">
                      <div className="choose_box">
                        <h1 className="number">04</h1>
                        <p className="whytitle">Real-Time Tracking</p>
                        <p className="content">
                          Track every ride or<br></br>
                          delivery live.
                        </p>
                      </div>

                      <div className="choose_box">
                        <h1 className="number">05</h1>
                        <p className="whytitle">Transparent Pricing</p>
                        <p className="content">
                          No hidden fees<br></br>
                          just fair, upfront fares.
                        </p>
                      </div>

                      <div className="choose_box">
                        <h1 className="number">06</h1>
                        <p className="whytitle">24/7 Availability</p>
                        <p className="content">
                          We're ready whenever<br></br>
                          you need us.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="animation_div">
                    <Bg_animation />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Why_choose;
