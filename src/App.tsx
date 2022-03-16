import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "containers/Auth";
import Routes from "routes/Routes";

function App() {
  return (
    <Router>
      <Auth>
        <Routes />
      </Auth>
    </Router>
  );
}

export default App;
