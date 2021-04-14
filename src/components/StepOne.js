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
    minLength: { value: 3, message: "To short, min 3 chars" },
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
          placeholder={"Enter your name..."}
          validation={validationFullName}
          register={register}
        />

        <InputField
          name={"surname"}
          title={"Surname"}
          type={"text"}
          error={errors.surname}
          placeholder={"Enter your surname..."}
          validation={validationFullName}
          register={register}
        />

        <InputField
          name={"patronymic"}
          title={"Patronymic"}
          type={"text"}
          error={errors.patronymic}
          placeholder={"Enter your patronymic..."}
          validation={validationFullName}
          register={register}
        />

        <InputField
          name={"date"}
          title={"Date of Birth"}
          type={"date"}
          error={errors.date}
          placeholder={"Enter your date of Birth..."}
          validation={validationDate}
          register={register}
        />

        {/* <div className={errors.name ? "input_field error" : "input_field"}>
          <label>
            Name<strong style={{ color: "red" }}>*</strong>
          </label>
          <Input
            type="text"
            placeholder="Enter your name..."
            {...register("name", validationFullName)}
          />
          {printError(errors.name)}
        </div> */}

        {/* <div className={errors.surname ? "input_field error" : "input_field"}>
          <label>
            Surname<strong style={{ color: "red" }}>*</strong>
          </label>
          <Input
            type="text"
            placeholder="Enter your surname..."
            {...register("surname", validationFullName)}
          />
          {printError(errors.surname)}
        </div> */}
        {/* <div
          className={errors.patronymic ? "input_field error" : "input_field"}
        >
          <label>
            Patronymic<strong style={{ color: "red" }}>*</strong>
          </label>
          <Input
            type="text"
            placeholder="Enter your patronymic..."
            {...register("patronymic", validationFullName)}
          />
          {printError(errors.patronymic)}
        </div> */}
        {/* <div className={errors.date ? "input_field error" : "input_field"}>
          <label>
            Date of Birth<strong style={{ color: "red" }}>*</strong>
          </label>
          <Input
            type="date"
            placeholder="Enter your date of Birth..."
            {...register("date", validationDate)}
          />
          {printError(errors.date)}
        </div> */}

        <div className="tooltip">
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            form="form"
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}
