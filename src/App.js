import { createContext, useState } from "react";
import "./App.css";
import { Outside } from "./components/Outside/Outside";

export const MyContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <MyContext.Provider value={3}>
      <div className="App">
        <Outside isDark={isDark} toggleDarkMode={toggleDarkMode} />
      </div>
    </MyContext.Provider>
  );
}

export default App;
