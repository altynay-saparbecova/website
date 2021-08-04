// // import React from "react";
// // import { Link } from "react-router-dom";
// import "./index.less";

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import Avatar from "@material-ui/core/Avatar";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 300,
//     marginBottom: "30px",
//     textAlign: "center",
//   },
//   media: {
//     // height: 0,
//     paddingTop: "400px",
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));
// export default function Post({ el, full_name, last_name }) {
//   const classes = useStyles();
//   return (
//     <div className="container">
//       <Card className={classes.root}>
//         <CardHeader
//           avatar={
//             <Avatar aria-label="recipe" className={classes.avatar}>
//               {full_name.toUpperCase().charAt(0) +
//                 last_name.toUpperCase().charAt(0)}
//             </Avatar>
//           }
//           title={el.title}
//           subheader={el.date}
//         />
//         {/* {<img src={el.img} alt=''/>} */}
//         <CardMedia className={classes.media} image={el.img} />
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {el.content}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.less";
const Post = ({ img }) => {
  // const state = useSelector((state) => state.localUsers);
  // console.log(state);

  return (
    <>
      <div className="post">
        <img className="postImg" src={img} alt="" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
              <Link className="link" to="/posts?cat=Music">
                Music
              </Link>
            </span>
            <span className="postCat">
              <Link className="link" to="/posts?cat=Music">
                Life
              </Link>
            </span>
          </div>
          <span className="postTitle">
            <Link to="/post/abc" className="link">
              Lorem ipsum dolor sit amet
            </Link>
          </span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        {/* <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
          fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
          atque, exercitationem quibusdam, reiciendis odio laboriosam?
        </p> */}
      </div>
      <div>
        {/* {state.map((e) => {
          return <div>{e.firstName}</div>;
        })}*/}
      </div>
    </>
  );
};
export default Post;
