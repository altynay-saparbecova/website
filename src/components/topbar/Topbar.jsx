import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./topbar.less";
import { useDispatch } from "react-redux";
import { exit_user } from "../../store/actions/index.jsx";

const Topbar = () => {
  const user = false;

  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>

      <div
        className="link"
        onClick={() => {
          dispatch(exit_user(history.push("/home")));
        }}
      >
        EXIT
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};
export default Topbar;
