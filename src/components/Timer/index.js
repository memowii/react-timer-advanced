import React from "react";

import "./index.css";
import { Display } from "./Display";
import { Keypad } from "./Keypad";

export function Timer() {
  return (
    <div className="Timer">
      <Display />
      <Keypad />
    </div>
  );
}
