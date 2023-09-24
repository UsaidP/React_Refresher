import React from 'react';
import { useNavigate } from 'react-router-dom';
import MeetUpForm from '../Components/MeetUps/MeetUpForm';

function NewMeetUps() {
  const history = useNavigate();
  function handlerMeetupData(meetupData) {
    fetch(
      'https://reactrefrasher-default-rtdb.firebaseio.com/meetupData.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history('/');
    });
  }
  return (
    <div>
      <h2>New MeetUps</h2>
      <MeetUpForm onAddMeetup={handlerMeetupData} />
    </div>
  );
}

export default NewMeetUps;
