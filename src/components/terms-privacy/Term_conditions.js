import React, { useEffect } from "react";
import './terms-privacy.css'
import Common_title from "../common/common-title/Common_title";

const Term_conditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className='Privacy_policy'>
                <div className='container'>

                    <Common_title specialtext="Terms & Conditions" />

                    <div className='white_card'>

                    <p className='point_title'>1. Introduction</p>
                    <p className='descn_text'>At 'Driwe ', we respect your privacy & are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our app and services. By using 'Driwe ', you agree to the terms outlined here</p>

                    <br />


                    <p className='point_title'>2. Information We Collect</p>
                    <p className='descn_text'>We collect certain information to provide a seamless shopping experience and improve our services: </p>
                    <p className='descn_text'>Personal Information: When you create an account, place an order, or contact us, we may collect your name, email address,
                        phone number, shipping address, and payment information.
                    </p>
                    <p className='descn_text'>   Usage Data: We may collect data on how you interact with our app, including pages viewed, time spent, search history, and
                        preferences to personalize your experience.
                    </p>

                    <p className='descn_text'>  Device Information: We collect details about your device, IP address, and browser settings to enhance security and
                        optimize performance.
                    </p>

                    <br />

                    <p className='point_title'>3. How We Use Your Information</p>

                    <p className='simple_text'>The information we collect is used to:</p>
                    <p className='inner_simple_text'>   Process orders and manage your account</p>
                    <p className='inner_simple_text'>The information we collect is used to:</p>
                    <p className='inner_simple_text'>The information we collect is used to:</p>

                    <br />

                    <p className='point_title'>4. Sharing Your Information</p>

                    <p className='simple_text'>We do not sell or share your personal information with third parties, except:</p>
                    <p className='simple_text'>With trusted service providers that assist in fulfilling orders, processing payments, and delivering customer support</p>
                    <p className='simple_text'> As required by law or for legal proceedings to protect our rights and enforce policies</p>

                    <br />

                    <p className='point_title'>5. Data Security</p>

                    <p className='simple_text'>  We implement advanced security measures to protect your data from unauthorized access, loss, or misuse. Our secure
                        payment gateways and encrypted systems ensure your personal information is handled with the highest level of security.
                    </p>

                    <br />

                    <p className='point_title'>6. Your Choices</p>

                    <p className='simple_text'>  Access and Update: You can access and update your personal information by logging into your account or contacting
                        directly.
                    </p>
                    <p className='simple_text'>    Opt-Out: You can opt-out of receiving promotional communications from us by following the unsubscribe instructions in the
                        emails or contacting us.
                    </p>


                    <br />

                    <p className='point_title'>7. Cookies and Tracking Technologies</p>

                    <p className='descn_text'>
                        We use cookies and similar technologies to collect information about your browsing behavior and enhance your experience
                        on our website. You can manage your cookie preferences through your browser settings.
                    </p>

                    <br />

                    <p className='point_title'>8. Changes to This Privacy Policy</p>

                    <p className='descn_text'>
                        We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated
                        policy on our website and updating the effective date. Your continued use of our services after the changes indicate your
                        acceptance of the revised policy.
                    </p>

                    <br />

                    <p className='note_text'>If you have any questions about this Privacy Policy, please contact us at info@Driwe .com</p>


                </div>

                </div>
            </section>
        </>
    )
}

export default Term_conditions