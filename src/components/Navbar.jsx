import dayjs from "dayjs";
import { navIcons, navLinks, wallpapers } from "../constants";

const Navbar = ({ onWallpaperChange }) => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <p className="font-bold">Ekansh's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name }) => {
            return (
              <li key={id}>
                <p>{name}</p>
              </li>
            );
          })}
          {wallpapers.map(({ id, img }) => {
            return (
              <li key={id}>
                <button className="h-5 w-5 rounded-full cursor-pointer overflow-hidden" onClick={() => onWallpaperChange(img)}>
                  <img
                    src={img}
                    alt="Wallpaper"
                    className="h-full w-full object-cover"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => {
            return (
              <li key={id}>
                <img src={img} className="icon-hover" alt={`icon-${id}`} />
              </li>
            );
          })}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
