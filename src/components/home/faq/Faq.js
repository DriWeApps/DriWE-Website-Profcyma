import React, { useEffect } from "react";
import "./faq.css";
import Common_title from "../../common/common-title/Common_title";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
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
      .querySelectorAll(".Faq_section")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="Faq_section">
        <div className="container">
          <Common_title specialtext={"Frequently Asked Questions"} />
          <div className="banner_div">
            <img
              className="faq-banner"
              src={
                process.env.PUBLIC_URL +
                "/assets/images/home/faq/faq_banner.png"
              }
            />
          </div>

          <div className="faq_div">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Q1: What payment methods does DriWE accept?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="content">
                        DriWE accepts all major credit cards, debit cards, digital wallets 
                        (UPI, Paytm, Google Pay), and cash payments. Your payment method can 
                        be easily managed in the app settings.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Q2: Can I track my driver in real time?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="content">
                        Yes! Once your ride is confirmed, you can track your driver’s location 
                        in real-time on the map. You’ll also receive SMS updates with driver details 
                        and estimated arrival time.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Q3:What is the Live Meter feature and how does it work??
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="content">
                        The Live Meter shows your real-time trip fare as you travel. 
                        It updates automatically based on distance, time, and ride conditions, 
                        ensuring full transparency throughout your ride.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Q4:What can I do in case of an emergency?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="content">
                        DriWE provides an in-app SOS feature for your safety. 
                        Simply tap the SOS button, capture a quick photo if prompted, 
                        and the app will instantly show emergency contact numbers and 
                        assistance options.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Q5: Can I use Ride and Courier at the same time?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="content">
                        Yes, absolutely.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
