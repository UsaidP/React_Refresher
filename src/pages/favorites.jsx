import React, { useContext } from 'react';
import FavoritesContext from '../Components/store/FavroriteContext';
import MeetUpList from '../Components/MeetUps/MeetUpList';

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>Add some to see favorites!</p>;
  } else {
    content = <MeetUpList Meetups={favoritesCtx.favorites} />;
  }

  return (
    <div>
      <h1>Favorites</h1>
      {content}
    </div>
  );
}

export default Favorites;
