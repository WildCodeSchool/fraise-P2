import React, { useState } from "react";
import "./Contact.css";
import{ init } from 'emailjs-com';
init("user_mHtCtPRmfXansncIGdpdq");



function Contact() {

 const [lastName, setLastName] = useState("");
 const [firstName, setFirstName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  sendFeedback("template_8ed58w8", {
    lastName,
    firstName,
    email,
    message,
  });
};

 
const sendFeedback = (templateId, variables) => {

  emailjs
    .send("service_lu1lv3a", templateId, variables)
    .then((res) => {
      console.log('success !');
      setLastName("");
      setFirstName("");
      setEmail("");
      setMessage("");
    })
    .catch(
      (err) =>
        document.querySelector('.form-message').innerHTML =
          "Une erreur s'est produite, veuillez réessayer.")
};

  return (

    <form className="contactform" onSubmit={handleSubmit}  >
      <h2 className="h2-contact">Contact Us</h2>
      <h4 className="h3-contact">Our team will be happy to answer your suggestions!</h4>

      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setLastName(e.target.value)}
        placeholder="lastName *"
        value={lastName}
        autoComplete="off"
        r
      />
        <br/>
        <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="firstName *"
        value={firstName}
        autoComplete="off"
        r
      />
  <br/>
        <label id="not-mail">Email non valide</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
            
      />
      <br/>
<label> Suggestions : </label>
        <br/>
        <input type="radio" name="type" />
        <label className="check"  id="check1" >Sickness</label>

        <input type="radio" name="type" />
        <label className="check"  id="check1" >Intolerence</label>

        <input type="radio" name="type" />
        <label className="check"  id="check1" > Diet</label>

        <input type="radio" name="type" />
        <label className="check"  id="check1" >Other</label>
      <br/>

      <br />
      <textarea
      placeholder="Please fill in your questions or comments *" 
      id="messagecontact" 
      cols="20" 
      rows="10"  
      name="message"
      onChange={(e) => setMessage(e.target.value)}
      value={message}
       />
      <br />

      <input 
      id="buttonContact"
      type="submit"
      value="Submit"
     
      />
   <div className="form-message"></div>
</form>
  );
  }

export default Contact;