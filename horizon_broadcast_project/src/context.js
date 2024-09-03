import { createContext } from "react";

const LanguageOption = createContext({
  language: "",
  setLanguage: () => {},
});

export default LanguageOption;
