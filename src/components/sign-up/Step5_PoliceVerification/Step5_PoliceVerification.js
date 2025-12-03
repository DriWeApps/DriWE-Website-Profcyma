"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Button } from "react-bootstrap";
import Common_button from "../../common/common-btn/Common_button";
import { getValueMap } from "@progress/kendo-react-dropdowns";
import { Form } from "@progress/kendo-react-form";
import { userSignUpStepFour, userSignUpStepThree } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";

function Step5_PoliceVerification({ prevStep, nextStep,formData }) {
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();


  
  const dispatch = useDispatch();
  // Trigger file upload
  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Trigger camera input
  const handleCameraCaptureClick = () => {
    cameraInputRef.current?.click();
  };

  // Handle file change
  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      await setValue("profile_photo", file); // Set field value in react-hook-form

      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result); // Set preview
      };
      reader.readAsDataURL(file);
    }
  };

  // On form submit
  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    const finalData = new FormData();
    finalData.append("profile_photo", data?.profile_photo);

     if (formData?.user_id) {
      finalData.append("user_id", formData?.user_id);
    } else {
      return;
    }

     const res = await dispatch(userSignUpStepFour(finalData));
        console.log(res, "resStepfour");
        if (res?.payload?.success) {
          await nextStep();
        } else {
        }
    // You can now send data.profile_photo to your backend
    // nextStep(); 
  };

  console.log(getValues(),'getValues');
  console.log(errors,'getValues');
  

  return (
    <Card className="signup-card">
      <form>
        <Card.Body className="photo-upload-body">
          <h4 className="step-title">Signup</h4>
          <p className="photo-instruction">Please upload photo for verification purpose.</p>

          <div className="photo-upload-section">
            {photoPreview ? (
              <img src={photoPreview} alt="Uploaded Preview" className="preview-image" />
            ) : (
              <div className="camera-icon">📷</div>
            )}
          </div>

          <div className="d-flex gap-3 mt-5 justify-content-center">
            <Button variant="outline-primary" onClick={handleFileUploadClick} type="button">
              Upload from File
            </Button>
            {/* <Button variant="outline-success" onClick={handleCameraCaptureClick} type="button">
              Capture from Camera
            </Button> */}
          </div>

          {/* Show error if needed */}
          {errors.profile_photo && (
            <p style={{ color: "red", fontSize: "13px" }}>
              {errors.profile_photo.message}
            </p>
          )}

          {/* Hidden Inputs */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handlePhotoUpload}
            style={{ display: "none" }}
          />
          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={cameraInputRef}
            onChange={handlePhotoUpload}
            style={{ display: "none" }}
          />

          {/* Register profile_photo in the form */}
          <input
            type="hidden"
            {...register("profile_photo", { required: "Photo is required" })}
          />
        </Card.Body>

        <Card.Footer>
          <div className="step-navigation">
            <Common_button name={"Back"} onClick={prevStep} type="button" />
            <Common_button name={"Verify"}  onClick={handleSubmit(onSubmit)}/>
          </div>
        </Card.Footer>
      </form>
    </Card>
  );
}

export default Step5_PoliceVerification;
