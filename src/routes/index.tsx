import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Detail from "./Detail";
import Leaderboard from "./Leaderboard";

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Leaderboard} />
      <Route path="/:id" exact component={Detail} />
    </Router>
  );
}
