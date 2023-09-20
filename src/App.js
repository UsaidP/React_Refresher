import React from "react";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/favorites";
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUps from "./pages/NewMeetUps";
import Layout from "./Components/Layouts/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetUps />} />
        <Route path='/new-meetups' element={<NewMeetUps />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
