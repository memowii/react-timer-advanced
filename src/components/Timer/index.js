import React, { useReducer } from "react";

import "./index.css";
import { Display } from "./Display";
import { Keypad } from "./Keypad";
import { Controls } from "./Controls";

import { timerInitialState, timerReducer } from "../../reducers/timerReducer";

export function Timer() {
  const [state, dispatch] = useReducer(timerReducer, timerInitialState);

  const handleOnFocus = (unitTime) =>
    dispatch({ type: "UNIT_TIME", payload: unitTime });

  const handleOnClick = (e) => {
    e.persist();

    if (!state.selectedUnitTime) return;

    const btn = e.target;
    dispatch({ type: "UPDATE_TIME_UNIT", payload: btn.dataset.value });
  };

  return (
    <div className="Timer">
      <Display
        hours={state.hours}
        minutes={state.minutes}
        seconds={state.seconds}
        handleOnFocus={handleOnFocus}
      />
      <Keypad handleOnClick={handleOnClick} />
      <Controls />
    </div>
  );
}
