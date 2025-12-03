import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section className="footer_section">
        <div className="container">
          <div className="bigtitlesec">
            <h1 className="driwebigtitle">DRIWE</h1>
            <p className="ridingp">Riding Together</p>
          </div>

          <div className="foot_menus_div">
            <div className="menudiv">
              <Link to={'/'}>Home</Link>
            </div>
            <div className="menudiv">
              <Link to={'/about-us'}>About us</Link>
            </div>
            <div className="menudiv">
              <Link to={'/services'}>Services</Link>
            </div>
            <div className="menudiv">
              <Link to={'/contact-us'}>Contact us</Link>
            </div>
            <div className="menudiv">
              <Link to={'/privacy-policy'}>Privacy Policy</Link>
            </div>
            <div className="menudiv">
              <Link to={'/terms-conditions'}>Terms and Condition</Link>
            </div>
          </div>

          <div className="copyrightsec">
            <div className="row">
              <div className="col-md-6">
                  <p className="copyp">© 2025 DriWE. All rights reserved <Link target='_blank' to={'https://profcymaglobal.com/'}></Link></p> 
              </div>
              <div className="col-md-6 text-md-end">
                  <div className="d-flex justify-content-md-end justify-content-center"> 
                      <p className="emaill bdright pe-2"><img className="icon" src={process.env.PUBLIC_URL + '/assets/images/icons/email.png'} />hello@driwe.in</p>
                      <div className="bdd"></div>
                      <p className="emaill ps-2"><img className="icon" src={process.env.PUBLIC_URL + '/assets/images/icons/call.png'} />+91 8669888996</p>
                  </div>
              </div>
            </div>
          </div>



        </div>

      </section>
    </>
  );
};

export default Footer;
