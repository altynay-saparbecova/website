import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./login.less";
import Write from "../../pages/write/Write.jsx";

const Login = () => {
  // functionaly

  // const [firstName, setFirstName] = useState(currentUser.firstName);
  // const [userEmail, setUserEmail] = useState(currentUser.userEmail);

  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);
  // const localUsers = useSelector((state) => state.localUsers);

  const [inEmail, setInEmail] = useState("");
  const [inPassword, setInPassword] = useState("");

  const history = useHistory();

  if (success) {
    history.push("./settings");
  }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="email"
          placeholder="Enter your email..."
          value={inEmail}
          name="email"
          onChange={(e) => setInEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          name="password"
          value={inPassword}
          placeholder="Enter your password..."
          onChange={(e) => setInPassword(e.target.value)}
        />
        <button
          className="loginButton"
          onClick={() => {
            dispatch(login_user({ inEmail, inPassword }));
          }}
        >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="Link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};
export default Login;
