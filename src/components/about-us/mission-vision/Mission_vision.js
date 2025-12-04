import React, { useEffect } from "react";
import "./Mission_vision.css";
import Common_title from "../../common/common-title/Common_title";
import Common_button from "../../common/common-btn/Common_button";

const Mission_vision = () => {
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

    document.querySelectorAll(".Mission_vision_sec").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="Mission_vision_sec">
        <div className="container">
          <Common_title
            specialtext={"Our Vision & Mission"}
            subtitle={
              "o make everyday travel and delivery easier, smarter, and more reliable for everyone"
            }
          />

          <div className="misvid_sec">
            <div className="row">
              <div className="col-lg-6 mb-3">
                <div className="leftsec">
                  <div className="visionbox">
                    <div className="row">
                      <div className="col-3">
                        <div className="imgdiv">
                          <img
                            className="img"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/about/mission-vission/visionbox.png"
                            }
                          />
                        </div>
                      </div>
                      <div className="col-9 my-auto">
                        <div className="content-sec">
                          <p className="content">
                            At DriWE, our mission is to make every ride smooth, safe, 
                            and affordable for our customers. We believe in complete transparency, 
                            ensuring there are no hidden charges-only a clear, honest, 
                            and reliable ride experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="visionbox">
                    <div className="row">
                      <div className="col-3">
                        <div className="imgdiv">
                          <img
                            className="img"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/about/mission-vission/missionbox.png"
                            }
                          />
                        </div>
                      </div>
                      <div className="col-9 my-auto">
                        <div className="content-sec">
                          <p className="content">
                            Our vision is to become the world’s best and safest ride-hailing application, 
                            setting new standards in reliability, service quality, and customer experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="banner_div">
                  <img
                    className="banner"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/about/mission-vission/banner.png"
                    }
                  />

                  <div className="overlay-content">
                    <h6 className="ourh1">
                      Our Purpose at <br></br>DriWE
                    </h6>
                    <p className="wep">
                      We’re here to reshape the way cities move — making
                      everyday rides and on-demand deliveries fast, safe, and
                      effortlessly connected..
                    </p>
                    <p className="havep">Have questions or need support?</p>
                    <Common_button name={"Contact us"} link={"/contact-us"} />
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

export default Mission_vision;
