import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import UseAddToHomeScreenPrompt from "../hooks/UseAddToHomeScreenPrompt";
import IconButton from "../components/IconButton";

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
    <Fragment>
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
        <div className="input_container u-mt-1-5">
          <input
            type="text"
            className="input_text"
            id="floatingInput"
            placeholder="name"
            autoComplete="off"
            onChange={(e) => {
              validateName(e.target.value);
            }}
          />
          <label className="input_label" htmlFor="floatingInput">
            Name <span className="">*</span>
          </label>
        </div>
        <Link to="/game">
          <button className="btn u-mt-1-5" type="submit" disabled={inValid} onClick={handleButton} >
            JOIN
          </button>
        </Link>
      </div>

      <div>
        {isReady && !hasFinishedInstallation && (
          <div className="container__install">
            <p className="tooltip__install">
              Click on the star to install the app on your device
            </p>
            <IconButton
              className="btn__install"
              name="star"
              icon="faStar"
              handleClick={() => promptToInstall()}
            />
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default Home;
