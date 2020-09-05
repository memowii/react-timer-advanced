import React from "react";

import "./index.css";

export const Display = () => {
  return (
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
      <div className="input-group input-group-lg Display__input-group">
        <input
          type="text"
          className="form-control Display__time Display__hours"
          maxLength="2"
          placeholder="00"
          defaultValue="00"
        />
        <span className="Display__time Display__separator">:</span>
        <input
          type="text"
          className="form-control Display__time Display__minutes"
          maxLength="2"
          placeholder="00"
          defaultValue="00"
        />
        <span className="Display__time Display__separator">:</span>
        <input
          type="text"
          className="form-control Display__time Display__seconds"
          maxLength="2"
          placeholder="00"
          defaultValue="00"
        />
      </div>
    </div>
  );
};
