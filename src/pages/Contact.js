import React, {useState} from 'react';
import "./Contact.css";
import { init } from 'emailjs-com';

init("user_mHtCtPRmfXansncIGdpdq");

const Contact = () => {
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
  <main className="main-contact">
    <div className="lightgreen-bloc"></div>
    <section className="contactform">
      <h2 className="h2-contact">Contact Us</h2>
      <p className="p-contact">Our team will be happy to answer your suggestions!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-entry">
          <label htmlFor="name">Last Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="lastName *"
            value={lastName}
            autoComplete="off"
          />
        </div>
        <div className="form-entry">
            <label htmlFor="name">First Name :</label>
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
        </div>
        <div className="form-entry">
          <div>
            <label htmlFor="email">Email :</label>
            <p id="not-mail">! Email non valide !</p>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <div className="form-suggestion">
          <h4>Suggestions :</h4>
          <input id="check-sickness" type="radio" name="sickness" />
          <label className="check"  for="check-sickness">Sickness</label>

          <input id="check-intolerence" type="radio" name="intolerence" />
          <label className="check"  for="check-intolerence">Intolerence</label>

          <input id="check-diet" type="radio" name="diet" />
          <label className="check"  for="check-diet"> Diet</label>

          <input id="check-other" type="radio" name="other" />
          <label className="check"  htmlFor="check-other">Other</label>
        </div>
        <div className="form-message">
          <label htmlFor="message"> Votre message :</label>
          <textarea placeholder="Please fill in your questions or comments" id="messagecontact" name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}></textarea>
        </div>
        <button id="buttonContact"
          type="submit"
          value="Submit">Send</button>
      </form>
    </section>
  </main>
  );
}

export default Contact;