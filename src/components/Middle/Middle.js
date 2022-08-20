import React from "react";
import { Inside } from "../Inside/Inside";
import "./Middle.css";

export const Middle = ({ isDark, toggleDarkMode }) => {
  return (
    <div className={isDark ? "middle middle--isDark" : "middle"}>
      <h1>Middle</h1>
      <Inside isDark={isDark} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};
