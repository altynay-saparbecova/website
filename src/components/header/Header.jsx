import React from "react";
import "./header.less";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          {/* <span className="headerTitleSm">WELCOME</span> */}
          {/* <span className="headerTitleLg">Welcome</span> */}
        </div>
        <img
          className="headerImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHhBfj52HsM46dT2Yl5jIv_L4N1HAUZG3cQ&usqp=CAU"
          // "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          // alt=""
        />
      </div>
    </>
  );
};
export default Header;
