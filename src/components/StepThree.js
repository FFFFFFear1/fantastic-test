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
      message: "Short password, at least 6 characters",
    },
  };

  const passwordConfirmation = {
    required: { value: true, message: "Required field" },
    validate: (value) =>
      value === password.current || "The passwords do not match",
  };

  return (
    <div className="conteiner">
      <form id="form" onSubmit={handleSubmit(submitData)}>
        <InputField
          name={"password"}
          title={"Password"}
          type={"password"}
          error={errors.password}
          placeholder={"Enter password..."}
          validation={validationPassord}
          register={register}
        />

        <InputField
          name={"confirmation"}
          title={"Verification password"}
          type={"password"}
          error={errors.confirmation}
          placeholder={"Re-enter password..."}
          validation={passwordConfirmation}
          register={register}
        />

        <Button variant="contained" color="secondary" type="submit" form="form">
          Continue
        </Button>
      </form>
    </div>
  );
}
