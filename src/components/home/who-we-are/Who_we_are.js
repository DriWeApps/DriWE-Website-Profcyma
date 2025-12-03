import React, { useEffect } from "react";
import "./Who_we_are.css";
import Common_title from "../../common/common-title/Common_title";
import Common_button from "../../common/common-btn/Common_button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Who_we_are = () => {
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

    document.querySelectorAll(".Who_we_are_sec").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="Who_we_are_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="row">
                <div className="col-md-8 mb-3">
                  <div className="left_sec">
                    <Common_title
                      specialtext={"Who We Are"}
                      subtitle={
                        "Connecting you with safe, reliable rides and seamless transport solutions."
                      }
                    />
                    <p className="whowecontent">
                      Driwe is committed to revolutionizing urban transport by
                      providing fast, safe, and affordable rides along with
                      reliable delivery services. Our user-friendly app connects
                      you with verified drivers and transport partners to ensure
                      a seamless experience every time you book. Whether you
                      need a quick ride across town or a trusted way to send
                      packages, Driwe is here to move you forward with
                      confidence.
                    </p>
                    <p className="whowecontent">
                      With a focus on safety, convenience, and transparency, we
                      continuously innovate to meet the evolving needs of our
                      users. Join millions who trust Driwe for their daily
                      transport & delivery needs.
                    </p>

                    <Common_button name={"Read More"} link={"/about-us"} />
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="">
                    <div className="rightsec">
                      <img
                        className="welogo"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/home/made-for/we.png"
                        }
                      />

                      <div className="icondiv">
                        <FontAwesomeIcon
                          className="rightarrow"
                          icon={faArrowRight}
                        />
                      </div>
                    </div>
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

export default Who_we_are;
