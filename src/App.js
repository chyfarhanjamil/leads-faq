import React, { useState, useRef } from "react";
import "./App.scss";
import { BrowserRouter as router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/authentication/Login";

function App() {
  const [isLogginActive, setLogginActive] = useState(true);
  const containerRef = useRef(null);
  
  return (
    <div className="App">
      <div className="login">
        <div className="container">{isLogginActive && <Login />}</div>
      </div>
    </div>
  );
}

export default App;
