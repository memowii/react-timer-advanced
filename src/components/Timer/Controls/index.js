import React from "react";

import "./index.css";

export const Controls = ({ canStart, onStart }) => (
  <div className="Controls">
    <button
      className="btn btn-success btn-lg btn-block rounded-0"
      disabled={!canStart}
      onClick={onStart}
    >
      START
    </button>
  </div>
);
