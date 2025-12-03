
import { useState } from "react"
import { Container, Row, Col, ProgressBar } from "react-bootstrap"
import "./Sign_Up.css"
import "react-phone-input-2/lib/style.css"
import Step1_BasicInfo from "./Step1_BasicInfo/Step1_BasicInfo"
import Step2_VehicleDetails from "./Step2_VehicleDetails/Step2_VehicleDetails"
import Step3_LicenseDetails from "./Step3_LicenseDetails/Step3_LicenseDetails"
import Step4_UploadPhoto from "./Step4_UploadPhoto/Step4_UploadPhoto"
import Step5_PoliceVerification from "./Step5_PoliceVerification/Step5_PoliceVerification"
import Step6_Agreement from "./Step6_Agreement/Step6_Agreement"
import Step7_Reference from "./Step7_Reference/Step7_Reference"
import Step8_Confirmation from "./Step8_Confirmation/Step8_Confirmation"

function Sign_Up() {
    const [currentStep, setCurrentStep] = useState(1)


    const [formData, setFormData] = useState({
        user_id: "",
        type: "",
    })


    // State for document previews and verification status
    const [documentPreviews, setDocumentPreviews] = useState({
        aadharFront: null,
        aadharBack: null,
        panFront: null,
        panBack: null,
        licenseFront: null,
        licenseBack: null,
        rcFront: null,
        rcBack: null,
        insuranceFront: null,
        insuranceBack: null,
    })

    const [verificationStatus, setVerificationStatus] = useState({
        aadharFront: false,
        aadharBack: false,
        panFront: false,
        panBack: false,
        licenseFront: false,
        licenseBack: false,
        rcFront: false,
        rcBack: false,
        insuranceFront: false,
        insuranceBack: false,
    })

    const totalSteps = 8

    const handleFileUpload = (field, file) => {
        if (field.includes("documents.")) {
            const docField = field.split(".")[1]
            setFormData((prev) => ({
                ...prev,
                documents: {
                    ...prev.documents,
                    [docField]: file,
                },
            }))
        } else {
            setFormData((prev) => ({
                ...prev,
                [field]: file,
            }))
        }
    }

    const handleDocumentUpload = (name, event, isDelete = false) => {
        const updatedPreviews = { ...documentPreviews }
        if (isDelete) {
            delete updatedPreviews[`${name}`]
            setDocumentPreviews(updatedPreviews)
            return
        }

        const file = event?.target?.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                updatedPreviews[`${name}`] = reader.result
                setDocumentPreviews(updatedPreviews)
            }
            reader.readAsDataURL(file)
        }
    }


    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1)
        }
    }

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const renderStep1 = () => (
        <Step1_BasicInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />
    )

    const renderStep2 = () => (
        <Step2_VehicleDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
    )

    const renderStep3 = () => (
        <Step4_UploadPhoto handleDocumentUpload={handleDocumentUpload} documentPreviews={documentPreviews} setDocumentPreviews={setDocumentPreviews} verificationStatus={verificationStatus} formData={formData}  nextStep={nextStep} prevStep={prevStep} />

    )

    const renderStep4 = () => (
       <Step5_PoliceVerification formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />

    )

    const renderStep5 = () => (
        <Step6_Agreement formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />

    )

    const renderStep6 = () => (
        <Step6_Agreement formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
    )

    const renderStep7 = () => (
        <Step7_Reference formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
    )

    const renderStep8 = () => (
        <Step8_Confirmation formData={formData} setFormData={setFormData} prevStep={prevStep} />
    )

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return renderStep1()
            case 2:
                return renderStep2()
            case 3:
                return renderStep3()
            case 4:
                return renderStep4()
            case 5:
                return renderStep5()
            case 6:
                return renderStep6()
            case 7:
                return renderStep7()
            case 8:
                return renderStep8()
            default:
                return renderStep1()
        }
    }


    return (
        <>
            <section className="signup-container">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={8} md={6} lg={5}>

                            <div className="mobile-frame">
                                <div className="logo-section">
                                    <img
                                        className="logo"
                                        src={process.env.PUBLIC_URL + "/assets/images/logo/drive_logo.png" || "/placeholder.svg"}
                                        alt="Drive Logo"
                                    />
                                </div>
                                {currentStep <= 5 && (
                                    <div className="progress-section">
                                        <span className="step-indicator">{currentStep}/5</span>
                                        <ProgressBar now={(currentStep / 5) * 100} className="step-progress" />
                                    </div>
                                )}
                                {renderCurrentStep()}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Sign_Up
