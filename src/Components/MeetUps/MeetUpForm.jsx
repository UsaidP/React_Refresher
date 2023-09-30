import React from 'react';
import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './MeetUpForm.module.css';

function MeetUpForm(props) {
  //For Reading values we mostly use useRef
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    //we are storing data which is user are typing in.eg:title etc, we are using .
    //current property which use in JS for holding the current information entered by user.
    //All the JS object has a value property which hold the current value of that input or other properties.
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          {/* ref is React built-in key word that is use to make connection between HTML element and useRef() with this we can access that element data and use them as we want.*/}
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea
            type='text'
            required
            id='description'
            rows='3'
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button> Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default MeetUpForm;
