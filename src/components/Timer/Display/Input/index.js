import React from "react";

export const Input = ({ className, defaultValue, timeUnit }) => (
  <>
    <input
      className={className}
      maxLength="2"
      placeholder="00"
      defaultValue={defaultValue}
      data-time-unit={timeUnit}
    />
  </>
);
