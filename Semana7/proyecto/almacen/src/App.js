import React from "react";
import Routes from "./routes";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import AuthContextProvider from "./context/authContext";

export default function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Navigation />
        <div className="container">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </AuthContextProvider>
    </Router>
  );
}
