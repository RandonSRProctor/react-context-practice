import React from "react";
import { Middle } from "./Middle/Middle";
import "./Outside.css";

export const Outside = ({ isDark, toggleDarkMode }) => {
  return (
    <div className={isDark ? "outside outside--isDark" : "outside"}>
      {isDark ? <h1>It's Dark</h1> : <h1>It's Light</h1>}
      <Middle isDark={isDark} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};
