import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../components/privateroute/Auth";
import "./Login.css";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
    axios
      .post("https://www.somePlace.com/auth/login", {
        userName,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Form>
        <Input
          class="name"
          type="username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          class="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button class="sign" onClick={postLogin}>
          Sign In
        </Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
      {isError && (
        <Error>The username or password provided were incorrect!</Error>
      )}
    </div>
  );
}

export default Login;
