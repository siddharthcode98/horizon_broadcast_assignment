import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LanguageOption from "./context";
import Menu from "./components/Menu";
import Settings from "./components/Settings";
import DisplayImage from "./common/DisplayImage";

function App() {
  const [language, setLanguage] = useState("FRENCH");
  return (
    <div>
      <div className="flex p-4 bg-orange-300">
        <LanguageOption.Provider value={{ language, setLanguage }}>
          <Menu />
          <Settings />
        </LanguageOption.Provider>
      </div>
      <Routes>
        <Route path="/" exact element={<DisplayImage />} />
        <Route path="/movies" exact element={<DisplayImage />} />
        <Route path="/tv-shows" exact element={<DisplayImage />} />
        <Route path="/sports" exact element={<DisplayImage />} />
        <Route path="/live" exact element={<DisplayImage />} />
      </Routes>
    </div>
  );
}

export default App;

