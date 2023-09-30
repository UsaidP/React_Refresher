import React, { useContext } from 'react';
import classes from './MeetUpItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../store/FavroriteContext';

function MeetUpItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorites = favoritesCtx.itemIsFavorites(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorites) {
      favoritesCtx.removeFavorites(props.id);
    } else {
      favoritesCtx.addFavorites({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <Card>
      <div className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3 className={classes.content}>{props.title}</h3>
          <address>{props.address}</address>
          <p className={classes.content}>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button
            className={classes.actions}
            onClick={toggleFavoriteStatusHandler}
          >
            {itemIsFavorites ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </div>
    </Card>
  );
}

export default MeetUpItem;
