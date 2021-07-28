import React from "react";
// import { useLocation } from "react-router";
import Header from "../../components/header/Header.jsx";
import News from "../../components/news/News.jsx";
import SideBar from "../../components/sidebar/Sidebar.jsx";
import "./home.less";
const Home = () => {
  // const location = useLocation();

  //   const [posts, setPosts] = useState([]);

  return (
    <>
      <Header />
      <div className="home">
        <News />
        <SideBar />
      </div>
    </>
  );
};
export default Home;
