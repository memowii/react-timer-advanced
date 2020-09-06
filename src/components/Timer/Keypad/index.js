import React from "react";

import "./index.css";

export const Keypad = ({ handleOnClick }) => (
  <div className="Keypad" onClick={handleOnClick}>
    <button className="btn btn-light btn-sm" data-value="1">1</button>
    <button className="btn btn-light btn-sm" data-value="2">2</button>
    <button className="btn btn-light btn-sm" data-value="3">3</button>
    <button className="btn btn-light btn-sm" data-value="4">4</button>
    <button className="btn btn-light btn-sm" data-value="5">5</button>
    <button className="btn btn-light btn-sm" data-value="6">6</button>
    <button className="btn btn-light btn-sm" data-value="7">7</button>
    <button className="btn btn-light btn-sm" data-value="8">8</button>
    <button className="btn btn-light btn-sm" data-value="9">9</button>
    <button className="btn btn-light btn-sm" data-value="x">x</button>
    <button className="btn btn-light btn-sm" data-value="0">0</button>
    <button className="btn btn-light btn-sm">&nbsp;</button>
  </div>
);
