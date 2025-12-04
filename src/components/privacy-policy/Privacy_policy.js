import React, { useEffect } from "react";
import './privacy_policy.css'
import Common_title from "../common/common-title/Common_title";

const Privacy_policy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className='Privacy_policy'>
            <div className='container'>

                <Common_title specialtext="Privacy Policy" />

                <div className='white_card'>

                    <p className='point_title'>1. Introduction</p>
                    <p className='descn_text'>This Refund Policy outlines the conditions under which refunds may be granted for payments made through DriWE. We are committed to ensuring transparency and fairness in all transactions.</p>

                    <br />

                    <p className='point_title'>2. Eligibility for Refunds</p>
                    <p className='descn_text'>All refund requests must be submitted in writing within two (2) calendar days (48 hours) from payment.</p>
                    <p className='descn_text'>Requests received after 48 hours will not be eligible under any circumstances.</p>

                    <br />

                    <p className='point_title'>3. Deductions and Fees</p>

                    <p className='simple_text'>Platform fees and payment processing charges will be deducted from the refundable amount.</p>
                    <p className='simple_text'>The net amount after deductions is considered final.</p>

                    <br />

                    <p className='point_title'>4. Mode of Refund</p>

                    <p className='simple_text'>Refunds processed via original payment method.</p>
                    <p className='simple_text'>Processing time depends on payment provider — DriWE is not liable for delays.</p>

                    <br />

                    <p className='point_title'>5. Acknowledgement</p>

                    <p className='simple_text'>By making a payment or using DriWE, you acknowledge that you have read, understood, and agree to be bound by this Refund Policy.</p>


                    <br />
                    <p className='note_text'>If you have any questions about this Privacy Policy, please contact us at hello@driwe.in</p>
                </div>

            </div>
        </section>
    )
}
export default Privacy_policy