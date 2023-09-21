import React from "react";
import MeetUpList from "../Components/MeetUps/MeetUpList";

const Dummy_Data = [
  {
    key: 1,
    id: "n1",
    title: "This is the First meetup",
    image: "https://picsum.photos/1500/700",
    address: "Mumbai",
    description: "First Amazing Meetup",
  },
  {
    key: 2,
    id: "n2",
    title: "This is the Second meetup",
    image: "https://loremflickr.com/1500/700",
    address: "Navi Mumbai",
    description: "Second Amazing Meetup",
  },
];
function AllMeetUps() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetUpList Meetups={Dummy_Data} />
    </section>
  );
}

export default AllMeetUps;
