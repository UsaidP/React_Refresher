import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Favorites from "./pages/favorites";
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUps from "./pages/NewMeetUps";
import Navbar from "./Components/Links/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<AllMeetUps />}/>
      <Route path='/new-meetups' element={<NewMeetUps />}/>
      <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </div>
    
  );
}

export default App;
