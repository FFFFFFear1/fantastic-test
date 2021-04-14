import React, { useState, useReducer } from "react";
import "./components/styles.scss";
import StepOne from "./components/StepOne";
import Context from "./context/context";

function App() {
  const [curStep, setCurStep] = useState(<StepOne />);

  const reducerMatch = (userData, action) => {
    switch (action.type) {
      case "addFullname":
        return {
          name: action.name,
          surname: action.surname,
          patronymic: action.patronymic,
          date: action.date,
        };
      case "addEmail":
        return {
          ...userData,
          email: action.email,
        };
      case "addPassword":
        return {
          ...userData,
          password: action.password,
        };
      case "clear":
        return {};
      default:
        return userData;
    }
  };

  const [data, dispatchDataMatch] = useReducer(reducerMatch, {
    name: "",
    surname: "",
    patronymic: "",
    email: "",
    password: "",
  });

  const addFullname = (data) =>
    dispatchDataMatch({
      type: "addFullname",
      name: data.name,
      surname: data.surname,
      patronymic: data.patronymic,
      date: data.date,
    });
  const addEmail = (email) =>
    dispatchDataMatch({
      type: "addEmail",
      email,
    });
  const addPassword = (password) =>
    dispatchDataMatch({
      type: "addPassword",
      password,
    });
  const clear = () =>
    dispatchDataMatch({
      type: "clear",
    });

  window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = "";
  });

  function printError(data) {
    if (data) {
      return <p className="errorText">{data.message}</p>;
    }
  }

  // сделать валидную дату

  return (
    <Context.Provider
      value={{
        setCurStep,
        printError,
        addFullname,
        addEmail,
        addPassword,
        data,
        clear,
      }}
    >
      {curStep}
    </Context.Provider>
  );
}

export default App;
