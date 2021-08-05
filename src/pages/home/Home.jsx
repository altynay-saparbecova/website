import React from "react";
import Header from "../../components/header/Header.jsx";
import News from "../../components/news/News.jsx";
// import SideBar from "../../components/sidebar/Sidebar.jsx";
import { useSelector } from "react-redux";

import "./home.less";
// import Postt from "../../components/post1/index.jsx";

const Home = () => {
  // const state = useSelector((state) => state);

  return (
    <>
      <Header />
      <div className="home">
        <News />
      </div>
    </>
  );
};
export default Home;
