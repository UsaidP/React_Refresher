import React from 'react';
import MeetUpForm from '../Components/MeetUps/MeetUpForm';
function NewMeetUps() {
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
    );
  }
  return (
    <div>
      <h2>New MeetUps</h2>
      <MeetUpForm onAddMeetup={handlerMeetupData} />
    </div>
  );
}

export default NewMeetUps;
