import React from "react";

const TextButton = ({ type, handleClick, disabled, text, className }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      data-testid="TextButtonComponent"
    >
      {text}
    </button>
  );
};

export default TextButton;
