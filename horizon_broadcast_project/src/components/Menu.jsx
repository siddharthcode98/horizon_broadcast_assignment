import { useContext } from "react";
import LanguageOption from "../context";
import { Link } from "react-router-dom";

const LanguageData = [
  {
    id: "FRENCH",
    translation: [
      "maison",
      "Films",
      "Émissions de télévision",
      "Sportif",
      "En direct",
    ],
  },
  {
    id: "GERMAN",
    translation: ["Heim", "Filme", "Fernsehsendungen", "Sport", "Live"],
  },
  {
    id: "RUSSIAN",
    translation: ["Дом", "Фильмы", "ТВ-шоу", "Спорт", "Жить"],
  },
  {
    id: "SPANISH",
    translation: [
      "Hogar",
      "Cine",
      "Programas de televisión",
      "Deportes",
      "Vivir",
    ],
  },
  {
    id: "CHINESE",
    translation: ["家", "电影", "电视节目", "运动的", "居住"],
  },
];

export default function Menu() {
  const { language } = useContext(LanguageOption);
  const { translation } = LanguageData.filter((item) => item.id == language)[0];
  const [home, movies, tv_shows, sports, live] = translation;
  return (
    <div>
      <ul className="flex gap-3">
        <li>
          <Link to="/">{home}</Link>
        </li>
        <li>
          <Link to="/movies">{movies}</Link>
        </li>
        <li>
          <Link to="/tv-shows">{tv_shows}</Link>
        </li>
        <li>
          <Link to="/sports">{sports}</Link>
        </li>
        <li>
          <Link to="/live">{live}</Link>
        </li>
      </ul>
    </div>
  );
}
