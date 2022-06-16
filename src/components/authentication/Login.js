import React from "react";
import loginImg from "../../assets/leads.png";

import "./style.scss";

export default function Login(props) {
  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              style={{ marginBottom: "31px" }}
              type="text"
              name="username"
              placeholder="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>
        </div>
      </div>
      <div className="footer-login">
        <button type="button" className="btn">
          Login
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <span>Not a user? </span>
        <span className="new-account" onClick={props.handleOnClick}>
          Create account
        </span>
      </div>
    </div>
  );
}
