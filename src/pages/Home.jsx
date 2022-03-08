import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseAddToHomeScreenPrompt from "../hooks/UseAddToHomeScreenPrompt";
import IconButton from "../components/IconButton";
import TextButton from "../components/TextButton";
import Input from "../components/Input";
import ToolTip from "../components/ToolTip";

const Home = ({ handleUserName, handleButton }) => {
  const [inValid, setInvalid] = useState(true);
  function validateName(value) {
    if (/^[a-zA-Z]{2,30}\S$/.test(value)) {
      handleUserName(value);
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  }
  const { isReady, promptToInstall, hasFinishedInstallation } =
    UseAddToHomeScreenPrompt();
  return (
    <div data-testid="HomePage">
      <div className="container u-mt-4">
        <div className="home__container-icon">
          <svg
            className="home-icon"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h48v48h-48z" fill="none" />
            <path d="M26 2.14v15.86h14c0-8.16-6.11-14.88-14-15.86zm-18 27.86c0 8.84 7.16 16 16 16s16-7.16 16-16v-8h-32v8zm14-27.86c-7.89.98-14 7.7-14 15.86h14v-15.86z" />
          </svg>
        </div>
        <h2 className="title u-mt-1">Create new player</h2>
        <Input
          conClass="input_container u-mt-1-5"
          iType="text"
          iClass="input_text"
          inputId="floatingInput"
          placeholder="name"
          autoComplete="off"
          handleChange={validateName}
          labelClass="input_label"
          text="Name"
          sClass=""
          sText="*"
        />
        <Link to="/game">
          <TextButton
            className="btn u-mt-1-5"
            type="submit"
            text="JOIN"
            disabled={inValid}
            handleClick={handleButton}
          />
        </Link>
      </div>

      <div>
        {isReady && !hasFinishedInstallation && (
          <ToolTip
            conClass="container__install"
            pClass="tooltip__install"
            text="Click on the star to install the app on your device"
          >
            <IconButton
              className="btn__install"
              name="star"
              icon="faStar"
              handleClick={() => promptToInstall()}
            />
          </ToolTip>
        )}
      </div>
    </div>
  );
};
export default Home;
