import React, { useContext } from "react";
import { MyContext } from "../../App";
import "./Inside.css";

export const Inside = ({ isDark, toggleDarkMode }) => {
  const { contextIsDark, contextToggleDarkMode } = useContext(MyContext);
  return (
    <div className={isDark ? "inside inside--isDark" : "inside"}>
      <h1>Inside</h1>
      <button
        className={
          contextIsDark
            ? "inside__button inside__button--isDark"
            : "inside__button"
        }
        onClick={contextToggleDarkMode}
      >
        Toggle {contextIsDark ? "Light" : "Dark"} Mode Via Context
      </button>
      <button
        className={
          isDark ? "inside__button inside__button--isDark" : "inside__button"
        }
        onClick={toggleDarkMode}
      >
        Toggle {isDark ? "Light" : "Dark"} Mode Via Props Drilling
      </button>
    </div>
  );
};
