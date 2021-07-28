import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import "./register.less";
// import { routes } from "../../routes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add_user } from "../../store/actions/index.jsx";
import { useState, useEffect } from "react";

const Register = () => {
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const history = useHistory();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    inEmail: "",
  });

  // const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const state = useSelector((state) => state);
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state));
  }, [currentUser]);

  useEffect(() => {
    if (values.email.trim() && values.name.trim() && values.password.trim()) {
      localStorage.setItem("users", JSON.stringify(state));
      history.push("./settings");
    }
  }, [state]);

  const onAdd = () => {
    let checkEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (
      values.name !== "" &&
      checkEmail.test(values.email) &&
      values.password.length > 7
    ) {
      dispatch(
        add_user({
          firstName: values.name.split(" ")[0],
          lastName: values.name.split(" ")[1],
          userEmail: values.email,
          userPassword: values.password,
          id: Date.now().toString(),
          success: true,
        })
      );
    }
  };
  //   else {
  //     setErrors(validation(values));
  //   }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      {/* {errors.inEmail && <p style={{ color: "red" }}>{errors.inEmail}</p>} */}

      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          name="name"
          placeholder="Enter your username..."
          value={values.name}
          onChange={handleChange}
        />
        {/* {errors.name && <p className="error">{errors.name}</p>} */}

        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          name="email"
          placeholder="Enter your email..."
          value={values.email}
          onChange={handleChange}
        />
        {/* {errors.email && <p className="error">{errors.email}</p>} */}

        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={values.password}
          onChange={handleChange}
        />
        {/* {errors.password && <p className="error">{errors.password}</p>} */}

        <button
          className="registerButton"
          type="submit"
          onClick={() => {
            onAdd();
          }}
        >
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="Link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};
export default Register;
