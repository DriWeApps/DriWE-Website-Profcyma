// Step6_Agreement.js
"use client"
import { Card } from "react-bootstrap"
import Common_button from "../../common/common-btn/Common_button"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Step6_Agreement({ prevStep, nextStep }) {
    

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000);
    });

    return (
        <Card className="signup-card completion-card">
            <Card.Body className="completion-body">
                <div className="success-icon">✓</div>
                <h3 className="completion-title">Signup Done!</h3>
                <p className="completion-message">
                    Document verification is under process
                    <br />
                    wait for the admin approval
                </p>
            </Card.Body>
            <Card.Footer>
                {/* <div className="step-navigation">
                    <Common_button name={"Back"} onClick={prevStep} />
                    <Common_button name={" Continue"} onClick={nextStep} />
                </div> */}
            </Card.Footer>
        </Card>
    )
}

export default Step6_Agreement