import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import Context from "../context/context";
import StepThree from "./StepThree";
import InputField from "./InputField";

export default function StepTwo() {
  const { setCurStep, addEmail } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    addEmail(`${data.email}`);
    if (data) setCurStep(<StepThree />);
  };

  const validationEmail = {
    required: { value: true, message: "Required field" },
    pattern: {
      value: /^[a-z0-9._&+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: "Invalid email",
    },
  };

  return (
    <div className="conteiner">
      <form id="form" onSubmit={handleSubmit(submitData)}>
        <InputField
          name={"email"}
          title={"Email"}
          type={"text"}
          error={errors.email}
          placeholder={"Enter your email..."}
          validation={validationEmail}
          register={register}
        />

        {/* <div className={errors.email ? "input_field error" : "input_field"}>
          <label>
            Email<strong style={{ color: "red" }}>*</strong>
          </label>
          <Input
            type="text"
            placeholder="Enter your email..."
            {...register("email", validationEmail)}
          />
          {printError(errors.email)}
        </div> */}
        
        <Button variant="contained" color="secondary" type="submit" form="form">
          Continue
        </Button>
      </form>
    </div>
  );
}
