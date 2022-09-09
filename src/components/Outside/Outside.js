import React from "react";
import { Middle } from "../Middle/Middle";
import "./Outside.css";

export const Outside = ({ isDark, toggleDarkMode }) => {
  return (
    <div className={`outside ${isDark ? "outside--isDark" : ""}`}>
      <h1>Outside</h1>
      <Middle isDark={isDark} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};
