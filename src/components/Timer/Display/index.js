import React from "react";

import "./index.css";

export const Display = ({ hours, minutes, seconds, handleOnFocus }) => (
  <div className="Display">
    <div className="Display__labels">
      <label type="text" className="Display__label">
        H
      </label>
      <label type="text" className="Display__label">
        M
      </label>
      <label type="text" className="Display__label">
        S
      </label>
    </div>
    <div
      className="input-group input-group-lg Display__input-group"
      onClick={handleOnFocus}
    >
      <input
        type="text"
        className="form-control Display__time Display__hours"
        maxLength="2"
        placeholder="00"
        // defaultValue={hours === 0 && "00"}
        defaultValue={hours}
        data-time-unit="h"
      />
      <span className="Display__time Display__separator">:</span>
      <input
        type="text"
        className="form-control Display__time Display__minutes"
        maxLength="2"
        placeholder="00"
        // defaultValue={minutes === 0 && "00"}
        defaultValue={minutes}
        data-time-unit="m"
      />
      <span className="Display__time Display__separator">:</span>
      <input
        type="text"
        className="form-control Display__time Display__seconds"
        maxLength="2"
        placeholder="00"
        // defaultValue={seconds === 0 && "00"}
        // defaultValue={seconds}
        value={seconds}
        onChange={() => null}
        data-time-unit="s"
      />
    </div>
  </div>
);
