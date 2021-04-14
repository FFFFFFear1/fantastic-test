import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Context from "../context/context";
import StepOne from "./StepOne";

export default function StepFour() {
  const { setCurStep, data, clear } = useContext(Context);
  const date = data.date.split("-");
  console.log(date);

  function repeat() {
    clear();
    setCurStep(<StepOne />);
  }

  return (
    <div className="conteiner">
      <form id="form">
        <h1 className="stepFour__title">Congratulations</h1>
        <div className="stepFour__result">
          <p id="name">Name: {data.name}</p>
          <p id="surname">Surname: {data.surname}</p>
          <p id="patronymic">Patronymic: {data.patronymic}</p>
          <p id="date">
            Date of Birth: {date[2]}.{date[1]}.{date[0]}
          </p>
          <p id="email">Email: {data.email}</p>
        </div>
        <Button onClick={repeat} variant="contained" color="secondary">
          Repeat
        </Button>
      </form>
    </div>
  );
}
