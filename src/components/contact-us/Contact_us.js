import React, { useEffect } from "react";
import "./contact-us.css";
import Common_title from "../common/common-title/Common_title";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Common_button from "../common/common-btn/Common_button";

const Contact_us = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    document
      .querySelectorAll(".contact_us_sec .form_sec .cont_details")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="container">
        <div className="contact_us_sec">
          <div className="form_sec">
            <Common_title
              specialtext={"Let’s Connect"}
              subtitle={"Our support team is ready to help you every step of the way."}
            />


            <div className="row">
              <div className="col-lg-7 col-11 mx-auto">
                <div className="form_div">
                  <Form>
                    <div className="row">
                      <div className="col-lg-6 mb-md-4 mb-2">
                        <div className="form-group">
                          <Form.Label>Full name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 mb-md-4 mb-2">
                        <div className="form-group">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="text" placeholder="Enter email" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-md-4 mb-2">
                        <div className="form-group">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Type here your Message"
                            style={{ height: "100px" }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 ">
                        <Common_button name={"Submit"} />
                      </div>
                    </div>
                  </Form>
                </div>
              </div>

              <div className="col-lg-10 mx-auto">
                <div className="cont_details">
                  <div className="row">
                    <div className="col-lg-4 mb-2 text-center">
                      <div className="contdiv">
                        <div className="icondiv">
                          <img
                            className="icon"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/contact-us/location.png"
                            }
                            alt="icon"
                          />
                        </div>
                        <h6 className="conttitle">Location</h6>
                        <p className="contdet">
                          Oneplace 8th floor 807, Salunke Vihar, Pune- 411048, Maharashtra
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-2 text-center">
                      <div className="contdiv">
                        <div className="icondiv">
                          <img
                            className="icon"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/contact-us/email.png"
                            }
                            alt="icon"
                          />
                        </div>
                        <h6 className="conttitle">Email</h6>
                        <p className="contdet">hello@driwe.in</p>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-2 text-center">
                      <div className="contdiv">
                        <div className="icondiv">
                          <img
                            className="icon"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/contact-us/contact.png"
                            }
                            alt="icon"
                          />
                        </div>
                        <h6 className="conttitle">Contact No</h6>
                        <p className="contdet">+91 8669888996</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mapdiv">
  <iframe
    className="gmap_iframe"
    frameBorder="0"
    scrolling="no"
    marginHeight="0"
    marginWidth="0"
    width="100%"
    height="337"
    allowFullScreen
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.079768588043!2d73.85625521525438!3d18.52454768732453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c074a7c2b1d1%3A0x3b2b2b1c1c1c1c1c!2sOneplace%208th%20floor%20807%2C%20Salunke%20Vihar%2C%20Pune-411048!5e0!3m2!1sen!2sin!4v1700000000000&style=feature:all|element:geometry|color:0x1d1d1d&style=feature:all|element:labels.text.fill|color:0xffffff&style=feature:water|element:geometry.fill|color:0x000000"
  ></iframe>
</div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_us;
