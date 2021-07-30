import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./write.less";
import { add_text } from "../../store/actions/index.jsx";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("null");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  const text = useSelector((state) => state.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      username: currentUser.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
    }
    axios.post("/news");
  };

  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          //   {URL.createObjectURL(file)}
          //   src=""
          alt=""
        />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            value={title}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button
          className="writeSubmit"
          type="submit"
          onClick={() => console.log(dispatch(add_text(text)))}
        >
          Add post
        </button>
      </form>
      <div>
        {text.map((id) => {
          return <p>{id}</p>;
        })}
      </div>
    </div>
  );
};
export default Write;
