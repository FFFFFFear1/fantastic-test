import React, { useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import Context from "../context/context";
import StepFour from "./StepFour";
import InputField from "./InputField";

export default function StepThree() {
  const { setCurStep, addPassword } = useContext(Context);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const submitData = (data) => {
    addPassword(`${data.password}`);
    if (data) setCurStep(<StepFour />);
  };

  const validationPassord = {
    required: { value: true, message: "Required field" },
    minLength: {
      value: 6,
      message: "To short password, min 6 chars",
    },
  };

  const passwordConfirmation = {
    required: { value: true, message: "Required field" },
    validate: (value) => value === password.current || "Password mismatch",
  };

  return (
    <div className="conteiner">
      <form id="form" onSubmit={handleSubmit(submitData)}>
        <InputField
          name={"password"}
          title={"Password"}
          type={"password"}
          error={errors.password}
          placeholder={"Enter your password..."}
          validation={validationPassord}
          register={register}
        />

        <InputField
          name={"confirmation"}
          title={"Password confirmation"}
          type={"password"}
          error={errors.confirmation}
          placeholder={"Enter your password..."}
          validation={passwordConfirmation}
          register={register}
        />

        {/* <div className={errors.password ? "input_field error" : "input_field"}>
          <label>
            Password<strong style={{ color: "red" }}>*</strong>
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password..."
            {...register("password", validationPassord)}
          />
          {printError(errors.password)}
        </div> */}
        {/* <div
          className={errors.confirmation ? "input_field error" : "input_field"}
        >
          <label>
            Password confirmation<strong style={{ color: "red" }}>*</strong>
          </label>
          <Input
            type="password"
            placeholder="Repeat your password..."
            {...register("confirmation", passwordConfirmation)}
          />
          {printError(errors.confirmation)}
        </div> */}

        <Button variant="contained" color="secondary" type="submit" form="form">
          Continue
        </Button>
      </form>
    </div>
  );
}
