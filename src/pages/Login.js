import React, { useEffect, useState, useContext } from "react";
import Auth from "../contexte/Auth";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = ({ history }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({...user, [name]: value })
  }
  const handleSubmit =  (e) => {
    console.log("this is the event: ")
    console.log(e);
    e.preventDefault();
    try {
      const response = login(username);
      setIsAuthenticated(response);
      history.replace("/Home");
    } catch ({ response }) {
      console.log(response);
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      history.replace("/Home");
    }
  }, [history, isAuthenticated]);

  return (
    <div className="login">
      <h2 className="h2-contact">Login</h2>
      <form className="form-profil" onSubmit={handleSubmit}>
        <input
          className="name"
          type="text"
          id="name"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <br />
        <input
          className="password"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="forgot">Forgot your password?</label>
        <br />
        <input
          className="sign"
          id="buttonsignup"
          type="submit"
          value="Sign in"
        />
      </form>
    </div>
  );
};
export default Login;
