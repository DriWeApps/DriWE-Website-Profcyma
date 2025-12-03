"use client";
import { Card, Form } from "react-bootstrap";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import Common_button from "../../common/common-btn/Common_button";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AllCity, AllPincode } from "../../../features/master/masterSlice";
import { useEffect, useRef, useState } from "react";
import {
  sendMobileOtp,
  userSignUpStepOne,
  verifyOtp,
} from "../../../features/auth/authSlice";
import { getUserInfo } from "../../../features/user/userSlice";
import { Input } from "@progress/kendo-react-inputs";

function Step1_BasicInfo({ formData, setFormData, nextStep }) {
  const cityOptions = [
    { value: "mumbai", label: "Mumbai" },
    { value: "pune", label: "Pune" },
    { value: "nagpur", label: "Nagpur" },
  ];

  const pincodeOptions = [
    { value: "400001", label: "400001" },
    { value: "411001", label: "411001" },
    { value: "440001", label: "440001" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const {
    control,
    register,
    setValue,
    watch,
    reset,
    handleSubmit,
    setError,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const cities = useSelector((state) => state.master.all_city);
  const pincodes = useSelector((state) => state.master.all_pincode);

  useEffect(() => {
    dispatch(AllCity());
  }, [dispatch]);

  const [verified, setVerified] = useState(false);
  const [timer, setTimer] = useState(0);
  const [validOtp, setValidOtp] = useState(false);
  const [otpShow, setOtpShow] = useState(false);
  const [disabled, setDisables] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const user = useSelector((state) => state.user.userInfo);
  console.log(user, "useruseruser", verified);

  const userDetails = async () => {
    const res = await dispatch(getUserInfo(formData.user_id));

    console.log(res?.payload, "resresresres");

    if (res?.payload?.id) {
      reset(res?.payload); 
      await setValue("city_id", res?.payload.city_id);
      await setValue("name", res?.payload.first_name);
      await setValue("owner_number", res?.payload.Driver_Detail?.owner_number);
      await setValue("type", res?.payload.type);
      formData.user_id = res?.payload?.id;
      formData.type = res?.payload.type;
      await setVerified(true);
    }
  };

  console.log(getValues(), "getValues");

  useEffect(() => {
    userDetails();
  }, []);

  useEffect(() => {
    let interval;
    if (disabled) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setDisables(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [disabled]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value) || value.length > 1) {
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus the next input field
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleCityChange = (selectedOption) => {
    console.log(selectedOption, "handleCityChange");
    setValue("city_id", selectedOption?.value);
    setValue("pincodes", null);
    dispatch(AllPincode({ cityId: selectedOption.value }));
  };

  const sendOtp = async (data) => {
    setOtp(["", "", "", ""]);
    if (!getValues("contact_no")) {
      await setError("contact_no", {
        type: "manual",
        message: "Contact Number Required",
      });
    } else {
      const data = {
        role: 2,
        login_type: "sign_up",
        contact_no: getValues("contact_no"),
        type: getValues("type"),
      };
      console.log(data, "datadata");

      const res = await dispatch(sendMobileOtp(data));
      console.log(res, "restttttttt");

      if (res?.payload?.success) {
        await setOtpShow(true);
        await setValidOtp(true);
        await setTimer(30);
        setDisables(true);
      } else {
        setOtpShow(false);
        setError("contact_no", {
          type: "manual",
          message: res?.payload?.response?.data?.message,
        });

        await setTimer(0);
      }
    }
  };

  const validateOtp = async () => {
    const data = {
      contact_no: getValues("contact_no"),
      otp: otp.join(""),
    };

    const verify = await dispatch(verifyOtp(data));
    console.log(data, "verifyOtpverifyOtp");
    if (verify.meta?.requestStatus === "fulfilled") {
      setOtpShow(false);
      setVerified(true);
      setOtp(["", "", "", ""]);

      await setTimer(0);
    } else if (verify.meta?.requestStatus === "rejected") {
      setError("otp", {
        type: "custom",
        message: verify.payload?.errors?.otp?.msg,
      });
    }
  };

  console.log(formData, "formData");

  const onSubmit = async (data) => {

    const finalData = new FormData(); 
    finalData.append("name", data?.name);
    finalData.append("type", data?.type);
    finalData.append("email", data?.email);
    finalData.append("owner_number", data?.owner_number);
    finalData.append("contact_no", data?.contact_no);
    finalData.append("city_id", data?.city_id); 
    if (data?.pincodes) {
      finalData.append(
        "pincodes",
        JSON.stringify(data?.pincodes?.map((option) => option.value))
      );
    }
    if (formData?.user_id) {
      finalData.append("user_id", formData?.user_id);
    }
    const res = await dispatch(userSignUpStepOne(finalData));


    if (res.meta?.requestStatus === "fulfilled") {
      await setValue("user_id", res?.payload?.data?.id);

      await setFormData({
        user_id: res?.payload?.data?.id,
        type: res?.payload?.data?.type,
      });

      await userDetails();
      nextStep();
    } else if (res.meta?.requestStatus === "rejected") {
      if (res.payload?.message?.email) {
        await setError("email", {
          type: "manual",
          message: res.payload?.message?.email,
        });
      }
      if (res.payload?.message?.contact_no) {
        await setError("contact_no", {
          type: "manual",
          message: res.payload?.message?.contact_no,
        });
      }
      if (res.payload?.message?.owner_number) {
        await setError("owner_number", {
          type: "manual",
          message: res.payload?.message?.owner_number,
        });
      }
    }
  };

  return (
    <Card className="signup-card">
      <Card.Body>
        <h4 className="step-title">Signup</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Select Type</Form.Label>
            <div className="d-flex">
              <Form.Check
                type="radio"
                label="Cab"
                name="type"
                value="Cab"
                defaultChecked
                {...register("type", {
                  required: "Type is required",
                })}
              />
              <Form.Check
                type="radio"
                className="ms-5"
                label="Transport"
                name="type"
                value="Transport"
                {...register("type", {
                  required: "Type is required",
                })}
              />
            </div>

            {errors?.type && (
              <div style={{ fontSize: "13px", color: "red" }}>
                {errors?.type?.message}
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Driver's Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Full Name"
              name="name"
              {...register("name", {
                required: "name is required",
              })}
            />
            {errors?.name && (
              <div style={{ fontSize: "13px", color: "red" }}>
                {errors?.name?.message}
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Driver's Email Id</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email Id"
              name="email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors?.email && (
              <div style={{ fontSize: "13px", color: "red" }}>
                {errors?.email?.message}
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Owner's Number</Form.Label>
            <div className="phone-input">
              <Controller
                className="phone_input"
                name="owner_number"
                control={control}
                rules={{
                  required: "Owners number is required",
                  minLength: {
                    value: 10,
                    message: "Number should be at least 10 characters",
                  },
                }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    onChange={(value) => field.onChange(value)}
                    type="number"
                    placeholder="Enter Mobile Number"
                    maxLength={10}
                  />
                )}
              />
            </div>
            {errors?.owner_number && (
              <div style={{ fontSize: "13px", color: "red" }}>
                {errors?.owner_number?.message}
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Driver's Number</Form.Label>
            <div className="phone-input">
              <Controller
                className="phone_input"
                name="contact_no"
                readOnly={verified}
                control={control}
                rules={{
                  required: "Drivers no is required",
                  minLength: {
                    value: 10,
                    message: "Number should be at least 10 characters",
                  },
                }}
                render={({ field }) => (
                  <Form.Control
                    // country="in"
                    {...field}
                    onChange={(value) => {
                      field.onChange(value);
                      clearErrors("contact_no");
                    }}
                    maxLength={10}
                    type="number"
                    placeholder="Enter Mobile Number"
                  />
                )}
              />
              {verified && (
                <div className="verified_text_holder">
                  <p>✓ Verified</p>
                </div>
              )}
            </div>
            {errors?.contact_no && (
              <div style={{ fontSize: "13px", color: "red" }}>
                {errors?.contact_no?.message}
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Controller
              name="city_id"
              control={control}
              rules={{ required: "City is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={cities}
                  placeholder="Select a city"
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption); // update form value
                    handleCityChange(selectedOption); // custom handler
                  }}
                  value={field.value}
                />
              )}
            />
            {errors?.city_id && (
              <div style={{ fontSize: "13px", color: "red" }}>
                {errors?.city_id?.message}
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Pincode</Form.Label>
            <Controller
              className="select-contoller "
              name={`pincodes`} // name of the field
              control={control}
              rules={{
                required: "Please select at least one Pincode",
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => ( 
                <Select
                  isMulti
                  // styles={{
                  //     control: (baseStyles) => ({
                  //         ...baseStyles,
                  //         borderColor: errors?.pincodes
                  //             ? "red"
                  //             : baseStyles.borderColor,
                  //     }),
                  // }}
                  // {...field}
                  options={pincodes}
                  onChange={(selectedValue) => {
                    onChange(selectedValue);
                  }}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                />
              )}
            />
            {errors?.pincodes && (
              <div style={{ fontSize: "13px", color: "red" }}>
                {errors?.pincodes?.message}
              </div>
            )}
          </Form.Group>

          {otpShow && (
            <>
              <Form.Group className="mb-4 d-flex gap-2">
                <Form.Label>OTP</Form.Label>
                {otp.map((value, index) => (
                  <Form.Control
                    key={index}
                    type="text"
                    value={value}
                    id={`otp-${index}`}
                    maxLength={1}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="text-center"
                    style={{ width: "50px", fontSize: "24px" }}
                  />
                ))}
                {errors.otp && (
                  <div style={{ color: "red" }}>{errors.otp.message}</div>
                )}
              </Form.Group>
              {disabled && (
                <>
                  <div className="text-center mb-3 text-muted link_text">
                    Resend Code in <strong>{timer}</strong> seconds
                  </div>
                </>
              )}
            </>
          )}
        </Form>
      </Card.Body>
      <Card.Footer>
        {verified ? (
          <>
            {user != null ? (
              <div className="step-navigation">
                <Common_button
                  name={"Submit"}
                  onClick={handleSubmit(onSubmit)}
                />
                {/* nextStep */}
              </div>
            ) : (
              <div className="step-navigation">
                <Common_button
                  name={"Submit"}
                  onClick={handleSubmit(onSubmit)}
                />
                {/* nextStep */}
              </div>
            )}
          </>
        ) : !validOtp ? (
          <div className="step-navigation">
            <Common_button name={"Get OTP"} onClick={() => sendOtp()} />
          </div>
        ) : (
          <div className="step-navigation">
            {disabled ? (
              <Common_button
                name={"Validate Otp"}
                onClick={() => validateOtp()}
              />
            ) : (
              <Common_button name={"Resend OTP"} onClick={() => sendOtp()} />
            )}
          </div>
        )}
      </Card.Footer>
    </Card>
  );
}

export default Step1_BasicInfo;
