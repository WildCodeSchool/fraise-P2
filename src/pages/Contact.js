import React from 'react';
import "./Contact.css";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { init } from 'emailjs-com';
init("user_mHtCtPRmfXansncIGdpdq");

const schema = yup.object({
  lastName: yup.string().max(20).required("Please enter your last name"),
  firstName: yup.string().max(20).required("Please enter your first name"),
  email: yup.string().email('Must be a valid email').max(255).required('Please enter a valid email address'),
  message: yup.string().max(200).required("Please enter a message"),
}).required();


const  Contact = () => {

  const { register, formState: {errors}, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data, r) => {
    alert("🥕Your message has been sent and will be processed as soon as possible! 🥕");
    const templateId = 'template_8ed58w8';
    const serviceId = "service_lu1lv3a";
    sendFeedback(serviceId, templateId, {lastName: data.lastName, firstName: data.firstName, email: data.email, sickness: data.sickness, intolerence: data.intolerence, diet: data.diet, other: data.other, message: data.message, reply_to: r.target.reset()})
  }

  const sendFeedback = (serviceId, templateId, variables) => {

    emailjs
    .send(serviceId, templateId, variables)
    .then(res => {
      console.log('Succes')
    })
    .catch(err => console.error('oups'))
  };
 


  return (
  <main className="main-contact">
    <div className="lightgreen-bloc"></div>
    <section className="contactform">
      <h2 className="h2-contact">Contact Us</h2>
      <p className="p-contact">Our team will be happy to answer your suggestions!</p>
      <form onSubmit={handleSubmit(onSubmit)}>  
        <div className="form-entry">
          <label htmlFor="name">Last Name :</label>
          <input
            type="text"
            id="name"
            name="lastname"
            placeholder="lastName *"
            autoComplete="off"
            {...register("lastName")}
          />
          {errors.lastName && <p id="p-yup">{errors.lastName.message}</p>}
        </div>
        <div className="form-entry">
            <label htmlFor="name">First Name :</label>
            <input
            type="text"
            id="name"
            name="firstname"
            placeholder="firstName *"
            autoComplete="off"
            {...register("firstName")}
          />
          {errors.firstName && <p id="p-yup">{errors.firstName.message}</p>}
        </div>
        <div className="form-entry">
          <div>
            <label htmlFor="email">Email :</label>
          </div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email *"
            autoComplete="off"
            {...register("email", {pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/})}
          />
          {errors.email && <p id="p-yup">{errors.email.message}</p>}
        </div>
        <div className="form-suggestion">
          <h4>Suggestions :</h4>

          
          <div className="inputext">
          <input id="check-sickness" type="radio" name="sickness" checked {...register("sickness")}/>

          <label className="check"  htmlFor="check-sickness">Sickness</label>
          </div>

          <div className="inputext">
          <input id="check-intolerence" type="radio" name="intolerence" {...register("intolerence")} />
          <label className="check"  htmlFor="check-intolerence">Intolerence</label>
          </div>
          
          <div className="inputext">
          <input id="check-diet" type="radio" name="diet"{...register("diet")}/>
          <label className="check"  htmlFor="check-diet"  >Diet</label>
          </div>

          <div className="inputext">
          <input id="check-other" type="radio" name="other" {...register("other")} />
          <label className="check"  htmlFor="check-other">Other</label>
            </div>

        </div>

        <div className="form-message">
          <label htmlFor="message"> Your message :</label>
          <textarea placeholder="Please fill in your questions or comments" id="messagecontact" name="message" {...register("message")}
          ></textarea>
          {errors.message && <p id="p-yup">{errors.message.message}</p>}
        </div>
        <button id="buttonContact"
          type="submit"
          value="Submit">Send</button>
      </form>
      <div className="form-message-contact"></div>
    </section>
  </main>
  );
}

export default Contact;
