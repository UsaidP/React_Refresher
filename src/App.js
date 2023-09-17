import { Route } from "react-router-dom";
import React from "react";
import NewMeetUps from "./pages/NewMeetUps";
import favorites from "./pages/favorites";
import AllMeetUps from "./pages/AllMeetUps";

function App() {
  return (
    <div>
      <Route path="/">
        <AllMeetUps />
      </Route>
    </div>
  );
}

export default App;
