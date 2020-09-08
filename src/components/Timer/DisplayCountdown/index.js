import React from "react";

import "./index.css";
import { Labels } from "./Labels";

export const DisplayCountdown = () => {
  return (
    <div className="DisplayCountdown">
      <Labels />
      <div className="DisplayCountdown__time">00:04:52:99</div>
    </div>
  );
};
