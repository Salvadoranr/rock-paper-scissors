import React from "react";

const ToolTip = ({ conClass, pClass, text, children }) => {
  return (
    <div className={conClass} data-testid="ToolTipComponent">
      <p className={pClass}>
        {text}
      </p>
      {children}
    </div>
  );
};

export default ToolTip;
