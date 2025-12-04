import { useEffect } from "react";

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

                    <p className='point_title'>1. Acceptance of Terms</p>
                    <p className='descn_text'>By creating an account, accessing, or using the Driwe Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy.</p>

                    <br />


                    <p className='point_title'>2. Eligibility</p>
                    <p className='descn_text'>You must be at least 18 years old to create an account and use the Driwe Services. By using the Services, you represent and warrant that you are at least 18 years old and capable of entering into a binding agreement. </p>
                    <br />

                    <p className='point_title'>3. Account Registration and Security</p>

                    <p className='simple_text'>To use certain features of our Services, you must create an account. You agree to:</p>
                    <p className='inner_simple_text'>Provide accurate, current, and complete information during registration</p>
                    <p className='inner_simple_text'>Maintain and update your account information</p>
                    <p className='inner_simple_text'>Keep your login credentials secure and confidential</p>
                    <p className='inner_simple_text'>Notify us immediately of any unauthorized use of your account</p>

                    <br />

                    <p className='point_title'>4. Services Provided</p>

                    <p className='simple_text'>Driwe provides a platform that connects users with transportation and delivery services. Our services include:</p>
                    <p className='inner_simple_text'>Ride booking and transportation services.</p>
                    <p className='inner_simple_text'> Package delivery services.</p>
                    <p className='inner_simple_text'> Real-time tracking and communication features.</p>
                    <p className='inner_simple_text'> Payment processing services.</p>

                    <br />

                    <p className='point_title'>5. User Conduct and Responsibilities</p>

                    <p className='simple_text'>When using our Services, you agree to:</p>
                    <p className='inner_simple_text'> Comply with all applicable laws and regulations.</p>
                    <p className='inner_simple_text'> Treat drivers and other users with respect.</p>
                    <p className='inner_simple_text'> Provide accurate pickup and destination information.</p>
                    <p className='inner_simple_text'> Pay all fees and charges associated with your use of the Services.</p>
                    <p className='inner_simple_text'> Not use the Services for illegal or unauthorized purposes.</p>

                    <br />

                    <p className='point_title'>6. Payment and Fees</p>

                    <p className='simple_text'> You agree to pay all fees and charges associated with your use of the Services. Payment will be processed through your chosen payment method. We reserve the right to change our pricing structure at any time with reasonable notice.</p>

                    <br />

                    <p className='point_title'>7. Limitation of Liability</p>

                    <p className='descn_text'>To the maximum extent permitted by law, Driwe shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Services.</p>

                    <br />

                    <p className='point_title'>8. Termination</p>

                    <p className='descn_text'>We may terminate or suspend your account and access to the Services at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>

                    <br />

                    <p className='note_text'>If you have any questions about this Privacy Policy, please contact us at hello@driwe.in</p>


                </div>

                </div>
            </section>
        </>
    )
}

export default Term_conditions