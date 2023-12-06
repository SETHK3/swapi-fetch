import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import User from "./components/User";

import "./styles/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>SWAPI Characters</h1>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/:id"} component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
