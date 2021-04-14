import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import Context from "../context/context";
import StepTwo from "./SterTwo";
import InputField from "./InputField";

export default function StepOne() {
  const { setCurStep, addFullname } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validationFullName = {
    required: { value: true, message: "Required field" },
    minLength: { value: 3, message: "Short password, at least 3 characters" },
    pattern: {
      value: /^[a-zA-Z\s]+$/i,
      message: "Invalid field",
    },
  };

  const validationDate = {
    required: { value: true, message: "Required field" },
  };

  const submitData = async (data) => {
    addFullname(data);
    if (data) setCurStep(<StepTwo />);
  };

  return (
    <div className="conteiner">
      <h1 className="stepOne__title">Welcome</h1>
      <form id="form" onSubmit={handleSubmit(submitData)}>
        <InputField
          name={"name"}
          title={"Name"}
          type={"text"}
          error={errors.name}
          placeholder={"Enter name..."}
          validation={validationFullName}
          register={register}
        />

        <InputField
          name={"surname"}
          title={"Surname"}
          type={"text"}
          error={errors.surname}
          placeholder={"Enter surname..."}
          validation={validationFullName}
          register={register}
        />

        <InputField
          name={"patronymic"}
          title={"Patronymic"}
          type={"text"}
          error={errors.patronymic}
          placeholder={"Enter patronymic..."}
          validation={validationFullName}
          register={register}
        />

        <InputField
          name={"date"}
          title={"Date of Birth"}
          type={"date"}
          error={errors.date}
          placeholder={"Enter date of Birth..."}
          validation={validationDate}
          register={register}
        />

        <Button variant="contained" color="secondary" type="submit" form="form">
          Continue
        </Button>
      </form>
    </div>
  );
}
