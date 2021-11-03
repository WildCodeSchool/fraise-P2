import React from 'react';
import "./Contact.css";

function Contact() {
  return (

    <div className="contactform">
      <h2 className="h2-contact">Contact Us</h2>
      <h4 className="h3-contact">Our team will be happy to answer your suggestions!</h4>

      <label for="name"> Last Name : </label><br />
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Last Name"
      />
        <br/>
        <label for="name"> First Name : </label><br />
        <input
        type="text"
        id="name"
        name="name"
        placeholder="First Name"
      />
  <br/>

  <label for="email"> Email : </label><br />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="exemple@gmail.com"
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
        <label for="message"> Message :</label><br />
      <textarea placeholder="Please fill in your questions or comments" id="message" cols="20" rows="10"  name="message"></textarea>
      <br />

      <input id="buttonContact"
        type="submit"
        value="Submit"/>
   
</div>
  );
}

export default Contact;