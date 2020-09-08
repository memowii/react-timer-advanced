import React, { useReducer } from "react";

import "./index.css";
import { Display } from "./Display";
import { Keypad } from "./Keypad";
import { Controls } from "./Controls";
import { DisplayCountdown } from "./DisplayCountdown";

import { timerInitialState, timerReducer } from "../../reducers/timerReducer";

export function Timer() {
  const [
    { selectedUnitTime, hours, minutes, seconds, canStart, isTimerStarted },
    dispatch,
  ] = useReducer(timerReducer, timerInitialState);

  const handleOnFocus = (unitTime) =>
    dispatch({ type: "UNIT_TIME", payload: unitTime });

  const handleOnClick = (e) => {
    e.persist();

    if (!selectedUnitTime) return;

    const value = e.target.dataset.value;

    if (value === "x") {
      dispatch({ type: "CLEAR_UNIT_TIME" });
      dispatch({ type: "CAN_START" });
    } else {
      dispatch({ type: "UPDATE_TIME_UNIT", payload: value });
      dispatch({ type: "CAN_START" });
    }
  };

  const handleOnStart = () =>
    dispatch({ type: "TIMER_STARTED", payload: true });

  return (
    <div className="Timer">
      {isTimerStarted && <DisplayCountdown />}

      {!isTimerStarted && (
        <Display
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          handleOnFocus={handleOnFocus}
        />
      )}

      {!isTimerStarted && <Keypad handleOnClick={handleOnClick} />}

      <Controls
        canStart={canStart}
        onStart={handleOnStart}
        isTimerStarted={isTimerStarted}
      />
    </div>
  );
}
