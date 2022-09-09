import { createContext, useState } from "react";
import "./App.css";
import { Outside } from "./components/Outside/Outside";

export const MyContext = createContext();

function App() {
  // This is the state for dark mode.  All components use this value
  // to determine what css classes are applied.
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <MyContext.Provider
      value={{ contextIsDark: isDark, contextToggleDarkMode: toggleDarkMode }}
    >
      <div className="App">
        <Outside isDark={isDark} toggleDarkMode={toggleDarkMode} />
      </div>
    </MyContext.Provider>
  );
}

export default App;
