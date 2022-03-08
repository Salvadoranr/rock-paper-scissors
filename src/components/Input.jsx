import React from "react";

const Input = ({
  conClass,
  iType,
  iClass,
  inputId,
  placeholder = '--',
  autoComplete,
  handleChange,
  labelClass,
  text,
  sClass,
  sText,
}) => {
  return (
    <div className={conClass} data-testid="InputComponent">
      <input
        type={iType}
        className={iClass}
        id={inputId}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <label className={labelClass} htmlFor={inputId}>
        {text} <span className={sClass}>{sText}</span>
      </label>
    </div>
  );
};

export default Input;
