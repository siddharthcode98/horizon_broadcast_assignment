import { useLocation } from "react-router-dom";
import home from "../assets/Home.jpg";
import movie from "../assets/movies.jpg";
import tvshows from "../assets/tvshows.jpg";
import sports from "../assets/sports.jpg";
import live from "../assets/live.jpg";

export default function DisplayImage() {
  const location = useLocation();

  let imageContainer = null;
  switch (location.pathname) {
    case "/":
      imageContainer = home;
      break;
    case "/movies":
      imageContainer = movie;
      break;
    case "/tv-shows":
      imageContainer = tvshows;
      break;
    case "/sports":
      imageContainer = sports;
      break;
    case "/live":
      imageContainer = live;
      break;
    default:
      break;
  }

  return (
    <div className="p-4 h-screen">
      <img
        src={imageContainer}
        className=" w-screen object-cover rounded-[50px] my-box-shadow"
      />
    </div>
  );
}
