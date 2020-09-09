import React from "react";

import "./index.css";

export const Controls = ({
  canStart,
  onStart,
  isTimerStarted,
  onStop,
  isTimerStopped,
  onReset,
}) => (
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
          className={`btn ${
            isTimerStopped ? "btn-success" : "btn-danger"
          } btn-lg btn-block rounded-0 mt-0`}
          onClick={onStop}
        >
          {isTimerStopped ? "RESUME" : "STOP"}
        </button>
        <button
          className="btn btn-primary btn-lg btn-block rounded-0 mt-0"
          onClick={onReset}
        >
          RESET
        </button>
      </>
    )}
  </div>
);
