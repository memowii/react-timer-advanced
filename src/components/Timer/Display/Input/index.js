import React from "react";

export const Input = ({ className, value, handleOnFocus }) => (
  <>
    <input
      className={className}
      maxLength="2"
      placeholder="00"
      value={value}
      onFocus={handleOnFocus}
      onChange={() => null}
    />
  </>
);
