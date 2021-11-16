import React, { useEffect, useState, useContext } from "react";
import Auth from "../contexte/Auth";
import "./Login.css";

const Login = ({ history }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const [username, setUsername] = useState({
    username: "",
    password: "",
  });
  const handleChange = ({ currentTarget }) => {
    const { username, value } = currentTarget;
    setUsername({ ...user, [username]: value });
  };
  const handleSubmit = async (event) => {
    console.log(event);
    event.preventDefault();
    try {
      const response = await login(username);
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

      <input
        class="name"
        type="name"
        id="name"
        name="username"
        placeholder="username"
        onChange={handleChange}
      />
      <br />
      <input
        class="password"
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <br />
      <label for="forgot">Forgot your password?</label>
      <br />
      <input
        class="sign"
        id="buttonsignup"
        type="submit"
        value="Sign in"
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default Login;
