import React from "react";
import classes from "./MeetUpItem.module.css";
import Card from "../ui/Card";

function MeetUpItem(props) {
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
          <button className={classes.actions}>To Favorites</button>
        </div>
      </div>
    </Card>
  );
}

export default MeetUpItem;
