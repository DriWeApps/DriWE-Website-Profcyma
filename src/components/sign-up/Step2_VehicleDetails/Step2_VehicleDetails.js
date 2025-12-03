// Step2_VehicleDetails.js
"use client";
import { Card, Form } from "react-bootstrap";
import Select from "react-select";
import Common_button from "../../common/common-btn/Common_button";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  getAllVehicleCategorys,
  getAllVehicles,
} from "../../../features/master/masterSlice";
import {
  userSignUpStepOne,
  userSignUpStepTwo,
} from "../../../features/auth/authSlice";
import { getUserInfo } from "../../../features/user/userSlice";

function Step2_VehicleDetails({ formData, setFormData, nextStep, prevStep }) {
  const vehicleTypeOptions = [
    { value: "auto", label: "Auto" },
    { value: "2wheeler", label: "2 Wheeler" },
    { value: "4wheeler", label: "4 Wheeler" },
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

  const vehicleType = useSelector((state) => state.master.vehicle_categorys);

  const vehicles = useSelector((state) => state.master.vehicles);

  console.log(vehicleType, "vehicleTypevehicleTypevehicleType");

  const pincodes = useSelector((state) => state.master.all_pincode);

  useEffect(() => {
    dispatch(getAllVehicleCategorys(formData.type));
  }, []);

  const handleTypeChange = (selectedOption) => {
    dispatch(getAllVehicles(selectedOption?.value));
    // dispatch(AllPincode({ cityId: selectedOption.value }));
  };

  const userDetails = async () => {
    const res = await dispatch(getUserInfo(formData.user_id));

    console.log(res?.payload, "resresresres");

    if (res?.payload?.id) {
      reset(res?.payload);
      await setValue('vehicle_category_id',{
        value:res?.payload?.Driver_Detail?.Vehicle_Category?.id,
        label:res?.payload?.Driver_Detail?.Vehicle_Category?.name,
        name:'vehicle_category_id',
      });
      await setValue('vehicle_id',{
        value:res?.payload?.Driver_Detail?.Vehicle?.id,
        label:res?.payload?.Driver_Detail?.Vehicle?.name,
        name:'vehicle_id',
      });
      await setValue('vehicle_number',res?.payload?.Driver_Detail?.vehicle_number);
    }
  };

  useEffect(() => {
    userDetails();
  }, []);

  console.log(getValues(), "getValues");

  const onSubmit = async (data) => {
    const finalData = new FormData();
    finalData.append("vehicle_number", data?.vehicle_number);
    finalData.append("vehicle_category_id", data?.vehicle_category_id?.value);
    finalData.append("vehicle_id", data?.vehicle_id?.value);

    if (formData?.user_id) {
      finalData.append("user_id", formData?.user_id);
    } else {
      return;
    }
    const res = await dispatch(userSignUpStepTwo(finalData));
console.log(res, "resSteptwo");
    if(res?.payload?.success){
            await nextStep();
    }else{
            
    }

    
  };

  return (
    <Card className="signup-card">
      <Card.Body>
        <h4 className="step-title">Vehicle Details</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Vehicle Category</Form.Label>

            <Controller
              name="vehicle_category_id"
              control={control}
              rules={{ required: "Vehicle Category is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={vehicleType}
                  placeholder="Select a Vehicle Category"
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption); // ✅ update RHF state
                    handleTypeChange(selectedOption); // optional: your custom handler
                  }}
                  value={field.value}
                />
              )}
            />

            {errors?.vehicle_category_id && (
              <div style={{ fontSize: "13px", color: "red" }}>
                {errors?.vehicle_category_id?.message}
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Vehicles</Form.Label>

            <Controller
              name="vehicle_id"
              control={control}
              rules={{ required: "Vehicle is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={vehicles}
                  placeholder="Select a Vehicle"
                  value={field.value}
                />
              )}
            />

            {errors?.vehicle_id && (
              <div style={{ fontSize: "13px", color: "red" }}>
                {errors?.vehicle_id?.message}
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Vehicle Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Vehicle Number"
              name="vehicle_number"
              {...register("vehicle_number", {
                required: "Vehicle Number is required",
              })}
            />
            {errors?.vehicle_number && (
              <div style={{ fontSize: "13px", color: "red" }}>
                {errors?.vehicle_number?.message}
              </div>
            )}
          </Form.Group>
        </Form>
      </Card.Body>
      <Card.Footer>
        <div className="step-navigation">
          <Common_button name={"Back"} onClick={prevStep} />
          <Common_button name={"Proceed"} onClick={handleSubmit(onSubmit)} />
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Step2_VehicleDetails;
