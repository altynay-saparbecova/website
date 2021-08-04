import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./write.less";
// import moment from "moment";

// import { add_post } from "../../store/actions/index.jsx";
import { useHistory } from "react-router-dom";

// const Write = () => {
//   const state = useSelector((state) => state.currentUser);
//   console.log(state);
//   const dispatch = useDispatch();

//   const [title, setTitle] = useState("");
//   // const [img, setImg] = useState("");
//   //   const [date, setDate] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));
//   const [content, setContent] = useState("");
//   // const [firstName, setFirstName] = useState(state.firstName);
//   // const [lastName, setLastName] = useState(state.lastName);
//   const [photo, setPhoto] = useState(state.photo);
//   // const [about, setAbout] = useState(state.about);
//   const history = useHistory();

//   const addPost = () => {
//     // console.log("content");
//     dispatch(
//       add_post({
//         title,
//         photo,
//         content,
//         date: moment().format("MMMM Do YYYY, h:mm:ss a"),
//         id: state.id,
//       })
//     ) && history.push("/");
//   };
//   console.log(title);
//   return (
//     <div className="write">
//       <div>
//         <input
//           className="writeInput"
//           placeholder=" link photo "
//           type="text"
//           value={photo}
//           onChange={(e) => setPhoto(e.target.value)}
//         ></input>
//       </div>

//       <form className="writeForm">
//         <div className="writeFormGroup">
//           <input
//             className="writeInput"
//             placeholder="Title"
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>

//         <div className="writeFormGroup">
//           <input
//             className="writeInput writeText"
//             placeholder="Tell your story..."
//             type="text"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           />
//         </div>

//         <button className="writeSubmit" type="submit" onClick={addPost}>
//           Add post
//         </button>
//       </form>
//     </div>
//   );
// };
// export default Write;

const Write = () => {
  const state = useSelector((state) => state.currentUser);
  console.log(state);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  // const [img, setImg] = useState("");
  //   const [date, setDate] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));
  const [content, setContent] = useState("");
  // const [firstName, setFirstName] = useState(state.firstName);
  // const [lastName, setLastName] = useState(state.lastName);
  const [photo, setPhoto] = useState(state.photo);
  // const [about, setAbout] = useState(state.about);
  const history = useHistory();

  const addPost = () => {
    // console.log("content");
    dispatch(
      add_post({
        title,
        photo,
        content,
        date: moment().format("MMMM Do YYYY, h:mm:ss a"),
        id: state.id,
      })
    ) && history.push("/");
  };

  return (
    <div>
      <div>
        <input
          className="writeInput"
          placeholder=" link photo "
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />

        <input
          className="writeInput"
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="writeInput writeText"
          placeholder="Tell your story..."
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div>
          <button className="writeSubmit" type="submit" onClick={addPost}>
            Add post
          </button>
        </div>
      </div>
    </div>
  );
};
export default Write;
