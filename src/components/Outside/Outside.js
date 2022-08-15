import React from "react";
import { Middle } from "./Middle/Middle";
import "./Outside.css";

export const Outside = ({ isDark, toggleDarkMode }) => {
  return (
    <div className={isDark ? "outside outside--isDark" : "outside"}>
      {isDark ? <p>It's Dark</p> : <p>It's Light</p>}
      <Middle isDark={isDark} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};
