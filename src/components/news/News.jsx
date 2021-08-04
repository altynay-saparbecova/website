import React from "react";
import Post from "../post/index.jsx";
import "./news.less";
import { useSelector } from "react-redux";
const News = () => {
  const state = useSelector((state) => state.localUsers);
  console.log(state);
  return (
    <div className="news">
      <div className="posts">
        <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        {/* <div>Зима часто начинается с холодных ветров и солнечных морозных дней, пришедших на смену дождливой поздней осени. Уже давно сбросившие листья деревья погружаются в глубокий сон. ... Снег толстым белым ковром устилает крыши домов, ложится на ветви деревьев, а в воздухе еще кружатся большие снежинки. Замерзают реки.</div> */}
        <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        {/* {state.firstName}
        {state.userEmail}
        {state.photo}
        {state.posts} */}

        {/* {state.map((e) => {
          return <div>{e.firstName}</div>;
        })} */}
      </div>
    </div>
  );
};
export default News;
