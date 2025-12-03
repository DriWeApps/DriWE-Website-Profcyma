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
                      Q1: How do I book a service?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="content">
                        Booking a service is simple! You can easily book through
                        our website by selecting your desired service and
                        preferred time slot, or by downloading our mobile app
                        for quick and convenient scheduling.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Q2: What payment methods do you accept?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="content">
                        Booking a service is simple! You can easily book through
                        our website by selecting your desired service and
                        preferred time slot, or by downloading our mobile app
                        for quick and convenient scheduling.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Q2: What payment methods do you accept?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="content">
                        Booking a service is simple! You can easily book through
                        our website by selecting your desired service and
                        preferred time slot, or by downloading our mobile app
                        for quick and convenient scheduling.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Q2: What payment methods do you accept?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="content">
                        Booking a service is simple! You can easily book through
                        our website by selecting your desired service and
                        preferred time slot, or by downloading our mobile app
                        for quick and convenient scheduling.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Q2: What payment methods do you accept?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="content">
                        Booking a service is simple! You can easily book through
                        our website by selecting your desired service and
                        preferred time slot, or by downloading our mobile app
                        for quick and convenient scheduling.
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
