"use client";
import { useEffect, useState } from "react";
import { Card, Form, Modal } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Common_button from "../../common/common-btn/Common_button";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image_Preview from "../../common/Image_Preview/Image_Preview";
import {
  userSignUpStepThree,
  userSignUpStepTwo,
} from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../../features/user/userSlice";

import { IMG_URL } from "../../../utils/common";

function Step4_UploadPhoto({
  prevStep,
  nextStep,
  handleDocumentUpload,
  documentPreviews,
  verificationStatus,
  setDocumentPreviews,
  formData,
}) {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const handleView = (imageSrc) => {
    setModalImage(imageSrc);
    setShowModal(true);
  };

  const handleDelete = (name) => {
    setValue(`${name}`, null); // Clear the file input
    handleDocumentUpload(name, null, true);
  };

  const userDetails = async () => {
    try {
      const res = await dispatch(getUserInfo(formData.user_id));
      const updatedPreviews = { ...documentPreviews };


      if (res?.payload?.Driver_Document) {
        // Reset the form with received values
        reset(res.payload.Driver_Document);

        const docs = res.payload.Driver_Document;

        // List of document keys to extract from response
        const docKeys = [
          "insurance_front",
          "vehicle_rc_front",
          "driving_licence_front", 
          "driving_licence_back",
          "pan_front",
          "pan_back",
          "aadhar_front",
          "aadhar_back",
        ];

        console.log(docs,'docsdocsdocs');
        

        // Populate previews
        docKeys.forEach((key) => {
          if (docs[key]) {
            updatedPreviews[key] = IMG_URL + docs[key];
          }
        });

        // Update state
        await setDocumentPreviews(updatedPreviews);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    userDetails();
  }, []);

  const onSubmit = async (data) => {
    const finalData = new FormData();

    for (const key in data) {
      if (data[key] instanceof File) {
        finalData.append(key, data[key]); // Keys like aadharFront, panBack, etc.
      }
    }

    if (formData?.user_id) {
      finalData.append("user_id", formData?.user_id);
    } else {
      return;
    }

    const res = await dispatch(userSignUpStepThree(finalData));
    console.log(res, "resStepthree");
    if (res?.payload?.success) {
      await nextStep();
    } else {
    }

    // You can now POST formData to your backend
    // nextStep();
  };

  //   "insurance_front",
  //         "vehicle_rc_front",
  //         "driving_licence_front",
  //         "driving_licence_back",
  //         "pan_front",
  //         "pan_back",
  //         "aadhar_front",
  //         "aadhar_back",

  console.log(documentPreviews, "erros");

  return (
    <Form>
      <Card className="signup-card">
        <Card.Header className="signup-header"></Card.Header>
        <Card.Body>
          <h4 className="step-title">Signup</h4>
          <p className="document-instruction">
            Please provide below documents (both sides)
          </p>
          <p className="upload-note">*Upload both back & front image!</p>

          <div className="documents-section">
            {[
              {
                key: "aadhar",
                label: "Aadhar Card",
                front_name: "aadhar_front",
                back_name: "aadhar_back",
              },
              {
                key: "pan",
                label: "PAN Card",
                front_name: "pan_front",
                back_name: "pan_back",
              },
              {
                key: "license",
                label: "Driving Licence",
                front_name: "driving_licence_front",
                back_name: "driving_licence_back",
              },
              {
                key: "rc",
                label: "Vehicle RC",
                front_name: "vehicle_rc_front",
              },
              {
                key: "insurance",
                label: "Insurance Policy",
                front_name: "insurance_front",
              },
            ].map((doc) => (
              <div key={doc.key} className="document-upload-row">
                <div className="document-label">{doc.label}</div>
                <div className="upload-buttons">
                  {/* Front View */}
                  <div className="upload-item">
                    <span>
                      <b>Front View</b>
                    </span>
                    <div className="upload-section">
                      <Controller
                        control={control}
                        name={doc.front_name}
                        rules={{ required: documentPreviews[`${doc.front_name}`] ? false : "Front image is required" }}
                        render={({ field }) => (
                          <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              field.onChange(file);
                              handleDocumentUpload(doc.front_name, e);
                            }}
                          />
                        )}
                      />
                    </div>
                    {errors?.[`${doc.front_name}`] && (
                      <p className="text-danger" style={{ fontSize: "13px" }}>
                        {errors[`${doc.front_name}`]?.message}
                      </p>
                    )}

                    {documentPreviews[`${doc.front_name}`] && (
                      <div className="document_preview_holder">
                        <div className="document-preview">
                          <img
                            src={documentPreviews[`${doc.front_name}`]}
                            alt={`${doc.label} Front`}
                            className="preview-image"
                          />
                          <div className="view_deleter_icon_holder">
                            <FontAwesomeIcon
                              icon={faEye}
                              className="view_icon_holder"
                              onClick={() =>
                                handleView(
                                  documentPreviews[`${doc.front_name}`]
                                )
                              }
                            />
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="view_icon_holder"
                              onClick={() =>
                                handleDelete(doc.front_name, "Front")
                              }
                            />
                          </div>
                        </div>
                        {verificationStatus[`${doc.front_name}`] && (
                          <div className="verification-mark">
                            <span className="verified-icon">✓</span>
                            <span className="verified-text">Verified</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Back View (conditionally render) */}
                  {doc.back_name && (
                    <div className="upload-item">
                      <span>
                        <b>Back View</b>
                      </span>
                      <div className="upload-section">
                        <Controller
                          control={control}
                          name={doc.back_name}
                          rules={{ required: documentPreviews[`${doc.back_name}`] ? false : "Back image is required" }}
                          render={({ field }) => (
                            <Form.Control
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                field.onChange(file);
                                handleDocumentUpload(doc.back_name, e);
                              }}
                            />
                          )}
                        />
                      </div>
                      {errors?.[`${doc.back_name}`] && (
                        <p className="text-danger" style={{ fontSize: "13px" }}>
                          {errors[`${doc.back_name}Back`]?.message}
                        </p>
                      )}

                      {documentPreviews[`${doc.back_name}`] && (
                        <div className="document_preview_holder">
                          <div className="document-preview">
                            <img
                              src={documentPreviews[`${doc.back_name}`]}
                              alt={`${doc.label} Back`}
                              className="preview-image"
                            />
                            <div className="view_deleter_icon_holder">
                              <FontAwesomeIcon
                                icon={faEye}
                                className="view_icon_holder"
                                onClick={() =>
                                  handleView(
                                    documentPreviews[`${doc.back_name}`]
                                  )
                                }
                              />
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="view_icon_holder"
                                onClick={() =>
                                  handleDelete(doc.back_name, "Back")
                                }
                              />
                            </div>
                          </div>
                          {verificationStatus[`${doc.back_name}`] && (
                            <div className="verification-mark">
                              <span className="verified-icon">✓</span>
                              <span className="verified-text">Verified</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card.Body>

        <Card.Footer>
          <div className="step-navigation">
            <Common_button name={" Back"} onClick={prevStep} />
            <Common_button name={" Proceed"} onClick={handleSubmit(onSubmit)} />
          </div>
        </Card.Footer>

        <Image_Preview
          showModal={showModal}
          setShowModal={setShowModal}
          modalImage={modalImage}
        />
      </Card>
    </Form>
  );
}

export default Step4_UploadPhoto;
