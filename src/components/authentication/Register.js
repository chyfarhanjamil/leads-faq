import React from "react";
import loginImg from "../../assets/login.svg";

import "./style.scss";

export default function Register(props) {
  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password" />
          </div>
        </div>
      </div>
      <div className="footer-register">
        <button type="button" className="btn">
          Register
        </button>
      </div>
      <div style={{ margin: "20px 0 20px 0" }}>
        <span>Already a user? </span>
        <span className="new-account" onClick={props.handleOnClick}>
          Log In
        </span>
      </div>
    </div>
  );
}
