import React, { useState } from "react";
import "./App.scss";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";

function App() {
  const [isLogginActive, setLogginActive] = useState(true);
  const current = isLogginActive ? "Register" : "Login";
  const currentActive = isLogginActive ? "Login" : "Register";

  const handleOnClick = () => {
    setLogginActive(!isLogginActive);
  };

  return (
    <div className="App">
      <div className="login">
        <div className="container">
          {isLogginActive && <Login handleOnClick={handleOnClick} />}
          {!isLogginActive && <Register handleOnClick={handleOnClick} />}
        </div>
      </div>
    </div>
  );
}

export default App;
