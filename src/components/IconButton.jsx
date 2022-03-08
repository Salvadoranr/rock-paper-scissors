import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FAI from "@fortawesome/fontawesome-free-solid";

const IconButton = ({ name, handleClick, disabled, icon, className }) => {
  return (
    <button
      className={className}
      name={name}
      onClick={handleClick}
      disabled={disabled}
    >
      <FontAwesomeIcon icon={FAI[icon]} />
    </button>
  );
};

export default IconButton;
