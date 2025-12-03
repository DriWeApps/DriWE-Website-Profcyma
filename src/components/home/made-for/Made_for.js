import React, { useEffect, useRef, useState } from "react";
import "./Made_for.css";

const Made_for = () => {
    
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

    document.querySelectorAll(".Made_for_section .banner_div").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className={"Made_for_section"}>
        <div className="container">
          <div className="banner_div">
            <div className="img_div">
              <img
                className="banner_img"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/home/made-for/banner.png"
                }
              />
            </div>
            <div className="overlaycolor"></div>

            <div className="overlay_content">
              <div className="icondiv">
                <img
                  className="icon"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/home/made-for/we.png"
                  }
                />
                <div className="row">
                  <div className="col-lg-9 col-11 mx-auto ">
                    <h5 className="banner-title">
                      Made for Your Everyday Moves
                    </h5>
                    <p className="banner-content">
                      Whether you're catching a ride or sending a package, Driwe
                      keeps it simple, safe, and fast. One app, countless
                      possibilities always on, always reliable.
                    </p>
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

export default Made_for;
