import React from "react";
import "./connexion.css";

function Connexion() {
  return (
    <div className="connexion">
      <h2 className="h2-contact">Sign up information</h2>

      <input type="name" id="name" name="name" placeholder="Username" />
      <br />

      <input type="email" id="email" name="email" placeholder="email adress" />
      <br />

      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      />
      <br />
      <input
        type="checkbox"
        id="accept"
        name="I accept the foolow conditions"
        checked
      />
      <label for="accept">I Agree To Term & Privacy Policy</label>
      <br />
      <input id="buttonsignup" type="submit" value="Sign up" />
    </div>
  );
}

export default Connexion;
