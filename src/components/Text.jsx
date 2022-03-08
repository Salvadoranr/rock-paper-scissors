import React from "react";

const Text = ({ pClass, pText, pFormatFn, sClass, sText, sFormatFn }) => {
  return (
    <p className={pClass} data-testid="TextComponent">
      <span className={sClass}> {sFormatFn ? sFormatFn(sText) : sText} </span>
      {pFormatFn ? pFormatFn(pText) : pText}
    </p>
  );
};

export default Text;
