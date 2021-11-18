import React, { useEffect, useState, useContext } from "react";
import Auth from "../contexte/Auth";
import "./Login.css";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().max(20).required("Please enter your User Name"),
  password: yup.string().max(200).required("Please enter a password"),
}).required();


const Login = ({ history }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({...user, [name]: value })
  }

  const handleSubmited =  (values) => {
    
    try {
      setIsAuthenticated(values.username);
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

  const { register, formState: {errors}, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });
  //const onSubmit = (data) => {
   // alert("👍You are connected👍");
 // }
const onSubmit = (data, e) => console.log(data, e);
 const onError = (errors, e) => console.log(errors, e);
  return (
    <div className="login">
      <h2 className="h2-contact">Login</h2>
      <form className="form-profil" onSubmit={(e) => {
        e.preventDefault();
       handleSubmit(handleSubmited, onError)()
        }}>

        <input
          className="name"
          type="text"
          id="name"
          name="username"
          placeholder="username"
          onChange={handleChange}
          {...register("username")}
        />
        {errors.username && <p id="p-yup">{errors.username.message}</p>}
        <br />
        <input
          className="password"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          {...register("password")}
        />
        {errors.password && <p id="p-yup">{errors.password.message}</p>}
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
