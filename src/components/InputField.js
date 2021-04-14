import React, { useContext } from "react";
import Context from "../context/context";
import Input from "@material-ui/core/Input";

export default function InputField(props) {
  const { printError } = useContext(Context);

  return (
    <div className={props.error ? "input_field error" : "input_field"}>
      <label>
        {props.title}
        <strong style={{ color: "red" }}>*</strong>
      </label>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        {...props.register(props.name, props.validation)}
      />
      {printError(props.error)}
    </div>
  );
}
