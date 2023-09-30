import React from 'react';
import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoriteMeetup) => {},
  removeFavorites: (meetupId) => {},
  itemIsFavorites: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoritesHandler(favoriteMeetup) {
    setUserFavorites((prevUserfavorites) => {
      return prevUserfavorites.concat(favoriteMeetup);
    });
  }
  function removeFavoritesHandler(meetupId) {
    setUserFavorites((prevUserfavorites) => {
      return prevUserfavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoritesHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoritesHandler,
    removeFavorites: removeFavoritesHandler,
    itemIsFavorites: itemIsFavoritesHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
