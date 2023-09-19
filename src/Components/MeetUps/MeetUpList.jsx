import React from "react";
import MeetUpItem from "./MeetupItem";
import classes from "./MeetUpList.module.css";

function MeetUpList(props) {
  return (
    <ul className={classes.list}>
      {props.Meetups.map((meetUp) => (
        <MeetUpItem
          key={meetUp.key}
          id={meetUp.id}
          image={meetUp.image}
          title={meetUp.title}
          address={meetUp.address}
          description={meetUp.description}
        />
      ))}
    </ul>
  );
}
export default MeetUpList;
