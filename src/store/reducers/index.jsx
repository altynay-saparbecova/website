import {
  ADD_USER,
  // EXIT_USER,
  LOGIN_USER,
  EDIT_USER,
  ADD_POST,
  // DELETE_USER,
} from "../actions/index.jsx";

const local = JSON.parse(localStorage.getItem("users"));

const initialState = {
  localUsers: [],
  currentUser: {
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: "",
    id: "",
    photo: "",
    posts: [],
  },
  postId: 0,
  succes: false,
};
console.log(initialState.currentUser == true);

export const rootReducer = (state = local ? local : initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      let isLogin = state.localUsers.findIndex(
        (el) => el.userEmail === action.user.userEmail
      );
      if (isLogin === -1) {
        return {
          ...state,
          localUsers: [...state.localUsers, action.user],
          currentUser: action.user,
          success: true,
        };
      } else {
        return state;
      }
    case LOGIN_USER:
      let inUser = state.localUsers.find(
        (el) =>
          el.userEmail === action.obj.inEmail &&
          el.userPassword === action.obj.inPassword
      );
      if (inUser) {
        return {
          ...state,
          currentUser: inUser,
          success: true,
        };
      } else {
        return state;
      }
    case EDIT_USER:
      return {
        ...state,
        currentUser: action.obj,
        localUsers: state.localUsers.map((el, id) => {
          return el.userEmail === state.currentUser.userEmail ? action.obj : el;
        }),
      };

    case ADD_POST:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          posts: [
            ...state.currentUser.posts,
            {
              title: action.obj.title,
              img: action.obj.img,
              content: action.obj.content,
              idPost: state.postId++,
            },
          ],
        },
        postId: state.postId++,
        localUsers: state.localUsers.map((el, id) => {
          return el.userEmail === state.currentUser.userEmail
            ? {
                ...state.currentUser,
                posts: [
                  ...state.currentUser.posts,
                  {
                    title: action.obj.title,
                    img: action.obj.img,
                    content: action.obj.content,
                    idPost: state.postId++,
                  },
                ],
              }
            : el;
        }),
      };
    default:
      return state;
  }
};
