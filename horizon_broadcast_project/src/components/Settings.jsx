import { useContext } from "react";
import LanguageOption from "../context";

export default function Settings() {
  const { setLanguage } = useContext(LanguageOption);
  return (
    <div className="ml-auto">
      <select
        onChange={(event) => {
          setLanguage(event.target.value);
        }}
      >
        <option value="FRENCH">French</option>
        <option value="GERMAN">German</option>
        <option value="RUSSIAN">Russian</option>
        <option value="SPANISH">Spanish</option>
        <option value="CHINESE">Chinese</option>
      </select>
    </div>
  );
}
