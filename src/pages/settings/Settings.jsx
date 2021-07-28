import React from "react";
import { useSelector, useState } from "react-redux";
import SideBar from "../../components/sidebar/Sidebar.jsx";
import "./setting.less";

const Settings = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [userEmail, setUserEmail] = useState(currentUser.userEmail);

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Safak"
            value={currentUser.firstName}
            name="name"
            onChange={(e) => {
              if (currentUser.firstName) {
                setFirstName(e.target.value);
              } else {
                e.preventDefault();
              }
            }}
          />
          <label>Email</label>
          <input
            type="email"
            value={currentUser.userEmail}
            placeholder="your email"
            name="email"
            onChange={(e) => {
              if (currentUser.userEmail) {
                setUserEmail(e.target.value);
              } else {
                e.preventDefault();
              }
            }}
          />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};
export default Settings;
