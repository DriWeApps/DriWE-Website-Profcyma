"use client"

import { Card } from "react-bootstrap"
import Vdo_animation from "../animation/Vdo_animation"
import Common_button from "../../common/common-btn/Common_button"

function Step8_VerificationStatus({ formData, prevStep }) {
    return (
        <Card className="signup-card">
            <Card.Body>
                <div className="vdo_lottie_logo_section">
                    <Vdo_animation />
                </div>

                <div className="final-message">
                    <h4>Thanks for watching!</h4>
                    <p>Ready to hit the road and start earning?</p>
                    <p className="journey-text">Let the journey begin!</p>
                </div>
            </Card.Body>
            <Card.Footer>
                <div className="step-navigation">
                    <Common_button name={"Back"} onClick={prevStep} />
                    <Common_button name={" Start Earning"} />
                </div>
            </Card.Footer>
        </Card>
    )
}

export default Step8_VerificationStatus
