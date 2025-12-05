// Counter.js
import React, { useEffect, useRef } from "react";
import "./counter.css";
import Common_title from "../../common/common-title/Common_title";// adjust path case if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Intersection observer to add .in-view on mobile/desktop
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      },
      { threshold: 0.25 } // lower threshold for mobile reliability
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Add touchstart/touchend listeners to produce hover-like effect on iOS/touch devices
    const cardEls = sectionRef.current
      ? Array.from(sectionRef.current.querySelectorAll(".counter_box"))
      : [];

    const handleTouchStart = (e) => {
      const el = e.currentTarget;
      el.classList.add("touch");
    };
    const handleTouchEnd = (e) => {
      const el = e.currentTarget;
      // short delay so users can see the effect
      setTimeout(() => el.classList.remove("touch"), 450);
    };

    cardEls.forEach((card) => {
      card.addEventListener("touchstart", handleTouchStart, { passive: true });
      card.addEventListener("touchend", handleTouchEnd, { passive: true });
      card.addEventListener("touchcancel", handleTouchEnd, { passive: true });
    });

    return () => {
      observer.disconnect();
      cardEls.forEach((card) => {
        card.removeEventListener("touchstart", handleTouchStart);
        card.removeEventListener("touchend", handleTouchEnd);
        card.removeEventListener("touchcancel", handleTouchEnd);
      });
    };
  }, []);

  return (
    <>
      <section className="Counter_section">
        <div className="container">
          <Common_title
            specialtext={"Driven by Numbers. Powered by People"}
            subtitle={
              "We’re proud of the milestones that reflect your trust and our performance."
            }
          />

          <div className="countersec" ref={sectionRef}>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6 col-12 mb-3">
                <div className="counter_box color1">
                  <h1 className="number">
                    1k<span>+</span>
                  </h1>
                  <p className="name">App Downloads</p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12 mb-3">
                <div className="counter_box color2">
                  <h1 className="number">
                    1K<span>+</span>
                  </h1>
                  <p className="name">Successful Rides Completed</p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12 mb-3">
                <div className="counter_box color1">
                  <h1 className="number">
                    2K<span>+</span>
                  </h1>
                  <p className="name">Verified Drivers & Partners</p>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12 mb-3">
                <div className="counter_box color2">
                  <h1 className="number">
                    3k
                    <span>
                      <FontAwesomeIcon className="staricon" />
                    </span>
                  </h1>
                  <p className="name">Happy customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
