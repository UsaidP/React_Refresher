import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import FavoritesContext from "../store/FavroriteContext";

function Navbar() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>MeetUps</div>
      <ul>
        <li>
          <Link to='/'>All MeetUps</Link>
        </li>
        <li>
          <Link to='/new-meetups'>New MeetUps</Link>
        </li>
        <li>
          <Link to='/favorites'>
            Favorites
            <div>
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
