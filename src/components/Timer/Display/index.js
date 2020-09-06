import React from "react";

import "./index.css";
import { Labels } from "./Labels";
import { Input } from "./Input";

export const Display = ({ hours, minutes, seconds, handleOnFocus }) => (
  <div className="Display">
    <Labels />
    <div className="input-group input-group-lg Display__input-group">
      <Input
        className="form-control Display__time Display__hours"
        value={hours}
        handleOnFocus={() => handleOnFocus("h")}
      />
      <span className="Display__time Display__separator">:</span>
      <Input
        className="form-control Display__time Display__minutes"
        value={minutes}
        handleOnFocus={() => handleOnFocus("m")}
      />
      <span className="Display__time Display__separator">:</span>
      <Input
        className="form-control Display__time Display__seconds"
        value={seconds}
        timeUnit="s"
        handleOnFocus={() => handleOnFocus("s")}
      />
    </div>
  </div>
);
