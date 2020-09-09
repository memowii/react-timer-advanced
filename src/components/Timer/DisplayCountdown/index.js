import React from "react";

import "./index.css";
import { Labels } from "./Labels";

export const DisplayCountdown = ({ time }) => {
  return (
    <div className="DisplayCountdown">
      <Labels />
      <div className="DisplayCountdown__time">{time}</div>
    </div>
  );
};
