"use client"
import { Card, Form } from "react-bootstrap"
import Common_button from "../../common/common-btn/Common_button"
import Select from "react-select" // ✅ Import Select

function Step3_LicenseDetails({ formData, setFormData, nextStep, prevStep }) {
    // ✅ Define options
    const vehicleTypeOptions = [
        { value: "bike", label: "Bike" },
        { value: "car", label: "Car" },
        { value: "auto", label: "Auto" },
    ]

    const bodyTypeOptions = [
        { value: "sedan", label: "Sedan" },
        { value: "hatchback", label: "Hatchback" },
        { value: "suv", label: "SUV" },
        { value: "scooter", label: "Scooter" },
        { value: "sportsbike", label: "Sports Bike" },
    ]

    // ✅ Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <Card className="signup-card">
            <Card.Body>
                <h4 className="step-title">Signup</h4>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Vehicle Type</Form.Label>
                        <Select
                            options={vehicleTypeOptions}
                            value={vehicleTypeOptions.find((opt) => opt.value === formData.vehicleType)}
                            onChange={(selected) => setFormData((prev) => ({ ...prev, vehicleType: selected?.value || "" }))}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Vehicle Body Type</Form.Label>
                        <Select
                            options={bodyTypeOptions}
                            value={bodyTypeOptions.find((opt) => opt.value === formData.vehicleBodyType)}
                            onChange={(selected) => setFormData((prev) => ({ ...prev, vehicleBodyType: selected?.value || "" }))}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Vehicle Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Pulsar 220"
                            name="vehicleName"
                            value={formData.vehicleName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Vehicle No.</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="MH40AA1092"
                            name="vehicleNumber"
                            value={formData.vehicleNumber}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Form>
            </Card.Body>
            <Card.Footer>
                <div className="step-navigation">
                    <Common_button name={"Back"} onClick={prevStep} />
                    <Common_button name={"Proceed"} onClick={nextStep} />
                </div>
            </Card.Footer>
        </Card>
    )
}

export default Step3_LicenseDetails
