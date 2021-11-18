import React from "react";
import "./Connexion.css";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().max(20).required("Please enter your User Name"),
  email: yup.string().email('Must be a valid email').max(255).required('Please enter a valid email address'),
  password: yup.string().max(200).required("Please enter a password"),
}).required();

const Connexion = () => {

  const { register, formState: {errors}, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    alert("👍You are registered👍");
  }
  return (
    <div className="connexion">
      <h2 className="h2-contact">Sign up information</h2>
      <form onSubmit={handleSubmit(onSubmit)}> 
      <input 
       type="name" 
       id="name" 
       name="name" 
       placeholder="Username"
       {...register("name")}
       />
       {errors.name && <p id="p-yup">{errors.name.message}</p>}
    <br />
      <input 
      type="email" 
      id="email" 
      name="email" 
      placeholder="email adress" 
      {...register("email", {pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/})}
      />
      {errors.email && <p id="p-yup">{errors.email.message}</p>}
      <br />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        {...register("password")}
      />
      {errors.password && <p id="p-yup">{errors.password.message}</p>}
      <br />
      <input
        type="checkbox"
        id="accept"
        name="I accept the foolow conditions"
        
      />
      <label for="accept">I Agree To Term & Privacy Policy</label>
      <br />
      <input 
      id="buttonsignup" 
      type="submit" 
      value="Sign up" />
      </form>
    </div>
   
  );
}

export default Connexion;
