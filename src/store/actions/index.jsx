export const ADD_USER = "ADD_USER";
export const LOGIN_USER = "LOGIN_USER";
export const EDIT_USER = "EDIT_USER";
export const ADD_POST = "ADD_POST";
export const add_user = (user) => ({
  type: ADD_USER,
  user,
});

export const login_user = (obj) => ({
  type: LOGIN_USER,
  obj,
});

export const add_post = (obj) => ({
  type: ADD_POST,
  obj,
});

export const edit_user = (obj) => ({
  type: EDIT_USER,
  obj,
});
