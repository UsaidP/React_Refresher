import React from 'react';
import { useState, useEffect } from 'react';
import MeetUpList from '../Components/MeetUps/MeetUpList';

function AllMeetUps() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetup, setLoadedMeetup] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://reactrefrasher-default-rtdb.firebaseio.com/meetupData.json'
      );
      const data = await response.json();

      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        };
        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetup(meetups);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1>Loading....</h1>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetUpList Meetups={loadedMeetup} />
    </section>
  );
}

export default AllMeetUps;
