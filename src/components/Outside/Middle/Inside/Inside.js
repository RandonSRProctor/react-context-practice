import React, { useContext } from "react";
import { MyContext } from "./../../../../App";
import "./Inside.css";

export const Inside = ({ isDark, toggleDarkMode }) => {
  const theNumber = useContext(MyContext);
  return (
    <div className={isDark ? "inside inside--isDark" : "inside"}>
      <h1>{theNumber}</h1>
      <button
        className={
          isDark ? "inside__button inside__button--isDark" : "inside__button"
        }
        onClick={toggleDarkMode}
      >
        Toggle {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};
