import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
  <main className="contactform">
    <h2 className="h2-contact">Contact Us</h2>
    <h3 className="h3-contact">Our team will be happy to answer your suggestions!</h3>
    <form action="">
      <div className="form-entry">
        <label for="name">Last Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Last Name"
        />
      </div>
      <div className="form-entry">
          <label for="name">First Name :</label>
          <input
          type="text"
          id="name"
          name="name"
          placeholder="First Name"
        />
      </div>
      <div className="form-entry">
        <label for="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="exemple@gmail.com"
        />
      </div>
      <div className="form-suggestion">
        <label>Suggestions :</label>
        <input type="radio" name="type" />
        <label className="check"  id="check1" >Sickness</label>

        <input type="radio" name="type" />
        <label className="check"  id="check1" >Intolerence</label>

        <input type="radio" name="type" />
        <label className="check"  id="check1" > Diet</label>

        <input type="radio" name="type" />
        <label className="check"  id="check1" >Other</label>
      </div>
      <div className="form-message">
        <label for="message"> Message :</label>
        <textarea placeholder="Please fill in your questions or comments" id="message" cols="20" rows="10"  name="message"></textarea>
      </div>
      <button id="buttonContact"
        type="submit"
        value="Submit">Send</button>
    </form>
  </main>
  );
}

export default Contact;