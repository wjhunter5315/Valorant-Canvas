import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Ascent from "./pages/Ascent";
import Bind from "./pages/Bind";
import Haven from "./pages/Haven";
import Split from "./pages/Split";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ascent" component={Ascent} />
          <Route exact path="/bind" component={Bind} />
          <Route exact path="/haven" component={Haven} />
          <Route exact path="/split" component={Split} />
          <Route exact path="/testpage" component={TestPage} />
        </Switch>
      </div>
    </Router>
  )
};

export default App;