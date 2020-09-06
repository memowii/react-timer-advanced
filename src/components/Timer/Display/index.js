import React from "react";

import "./index.css";
import { Labels } from "./Labels";
import { Input } from "./Input";

export const Display = ({ hours, minutes, seconds, handleOnFocus }) => (
  <div className="Display">
    <Labels />
    <div
      className="input-group input-group-lg Display__input-group"
      onClick={handleOnFocus}
    >
      <Input
        className="form-control Display__time Display__hours"
        defaultValue={hours}
        timeUnit="h"
      />
      <span className="Display__time Display__separator">:</span>
      <Input
        className="form-control Display__time Display__minutes"
        defaultValue={minutes}
        timeUnit="m"
      />
      <span className="Display__time Display__separator">:</span>
      <Input
        className="form-control Display__time Display__seconds"
        defaultValue={seconds}
        timeUnit="s"
      />
    </div>
  </div>
);
