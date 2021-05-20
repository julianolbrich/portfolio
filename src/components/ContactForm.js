import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './css/ContactForm.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import AlbumIcon from '@material-ui/icons/Album';


function ContactForm() {
  const [state, handleSubmit] = useForm("mqkwpdrk");
  if (state.succeeded) {
      return <p>Thanks for your message :)</p>;
  }
  return (
    <div className="ContactForm">
      <div className="ContactForm-background">
        <h2> Contact </h2>

        <form onSubmit={handleSubmit} id="fs-frm" name="simple-contact-form" accept-charset="utf-8">
          <fieldset id="fs-frm-inputs">
          
          {/* <label for="full-name">Name</label> */}
          <input type="text" name="name" id="full-name" placeholder="Name" required="" />
          
          {/* <label for="company">Company</label> */}
          <input type="text" name="company" id="company" placeholder="Company" required="" />
          
          {/* <label for="email" htmlFor="email">Email</label> */}
          <input id="email" type="email" name="email" placeholder="Email" required="" />
          <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
          />
          
          {/* <label for="phone">Phone (optional)</label> */}
          <input type="text" name="phone" id="phone" placeholder="Phone" />
          
          {/* <label for="message">Message</label> */}
          <textarea rows="5" name="message" id="message" type="text" placeholder="Hi Julian, &#13;&#13;please get back to us soon! We'd love to work with you. &#13;&#13;Best, xyz" required=""></textarea>
          <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
          />

          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
          </fieldset>
          
          <button type="submit" disabled={state.submitting}>
              Submit
          </button>
        </form>

        <div className="Sidebar-bottom">
            <a className="Sidebar-bottom-icon" href="mailto:julianolbrich@gmail.com" target="_blank" rel="noreferrer"> <MailIcon htmlColor="black"  /> </a>
            <a className="Sidebar-bottom-icon" href="https://www.linkedin.com/in/julianolbrich/" target="_blank" rel="noreferrer"> <LinkedInIcon htmlColor="black"  /> </a>
            <a className="Sidebar-bottom-icon" href="https://github.com/julianolbrich" target="_blank" rel="noreferrer"> <GitHubIcon htmlColor="black" /> </a>
            {/* <a className="Sidebar-bottom-icon" href="https://www.thegoodygoody.com/" target="_blank" rel="noreferrer"> <AlbumIcon htmlColor="black"  /> </a> */}
            <a className="Sidebar-bottom-icon" href="https://www.instagram.com/thegoodygoody__/" target="_blank" rel="noreferrer"> <InstagramIcon htmlColor="black"  /> </a>
        </div>
      </div>

    </div>
  );
}

function App() {
  return (
    <ContactForm />
  );
}
export default App;
