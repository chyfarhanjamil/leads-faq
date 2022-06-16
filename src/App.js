import React, { useState, useRef } from "react";
import "./App.scss";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import RightSide from "./components/RightSide";

function App() {
  const [isLogginActive, setLogginActive] = useState(true);
  const containerRef = useRef(null);
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
          {!isLogginActive && (
            <Register
              style={{ transition: "2s" }}
              handleOnClick={handleOnClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
