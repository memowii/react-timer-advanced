import React from "react";

import "./index.css";

export const Controls = ({ canStart, onStart, isTimerStarted }) => (
  <div className="Controls">
    {!isTimerStarted ? (
      <button
        className="btn btn-success btn-lg btn-block rounded-0"
        disabled={!canStart}
        onClick={onStart}
      >
        START
      </button>
    ) : (
      <>
        <button
          className="btn btn-danger btn-lg btn-block rounded-0 mt-0"
          onClick={onStart}
        >
          STOP
        </button>
        <button
          className="btn btn-primary btn-lg btn-block rounded-0 mt-0"
          onClick={onStart}
        >
          RESET
        </button>
      </>
    )}
  </div>
);
