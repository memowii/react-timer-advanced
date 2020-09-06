import React, { useReducer } from "react";

import "./index.css";
import { Display } from "./Display";
import { Keypad } from "./Keypad";
import { Controls } from "./Controls";

import { timerInitialState, timerReducer } from "../../reducers/timerReducer";

export function Timer() {
  const [state, dispatch] = useReducer(timerReducer, timerInitialState);

  const handleOnFocus = (e) => {
    e.persist();
    dispatch({ type: "INPUT", payload: e.target });
  };

  const handleOnClickKeypad = (e) => {
    e.persist();

    if (!state.lastInputSelected) return;
    
    const btn = e.target;
    dispatch({ type: "UPDATE_TIMES", payload: btn.dataset.value });
  };

  return (
    <div className="Timer">
      <Display
        hours={state.hours}
        minutes={state.minutes}
        seconds={state.seconds}
        handleOnFocus={handleOnFocus}
      />
      <Keypad handleOnClick={handleOnClickKeypad} />
      <Controls />
    </div>
  );
}
