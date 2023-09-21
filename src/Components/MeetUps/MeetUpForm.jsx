import React, { useRef } from "react";
import Card from "../ui/Card";
import classes from "./MeetUpForm.module.css";

function formHandler(event) {
  const title = useRef();
}

function MeetUpForm() {
  return (
    <Card className={classes.card}>
      <form className={classes.form} onSubmit={formHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' required id='address' />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea type='text' required id='description' rows='3' />
        </div>
        <div className={classes.actions}>
          <button> Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default MeetUpForm;
