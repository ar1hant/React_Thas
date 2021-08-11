import "./ReactRouter.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./router/About.jsx";
import Dashboard from "./router/Dashboard.jsx";
import Home from "./router/Home.jsx";
import Profile from "./router/Profile.jsx";
import { AuthContext } from "./context/Auth";

function ReactRouter() {
  return (
    <div className="ReactRouter_App">
      <Router>
        <div className="ReactRouter_navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        <Switch>
          <AuthContext>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/dashboard" component={Dashboard} />
          </AuthContext>
        </Switch>
      </Router>
    </div>
  );
}

export default ReactRouter;