import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './css/ContactForm.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("mqkwpdrk");
  if (state.succeeded) {
      return <p>Thanks for your message :)</p>;
  }
  return (
    <div className="ContactForm">
      <h2> Contact </h2>
      <form onSubmit={handleSubmit} id="fs-frm" name="simple-contact-form" accept-charset="utf-8">
        <fieldset id="fs-frm-inputs">
        
        <label for="full-name">Name</label>
        <input type="text" name="name" id="full-name" placeholder="H. R. Managers" required="" />
        
        <label for="company">Company</label>
        <input type="text" name="company" id="company" placeholder="Amazing Companies" required="" />
        
        <label for="email" htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="hrmanagers@amazingcompanies.io" required="" />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        
        <label for="phone">Phone (optional)</label>
        <input type="text" name="phone" id="phone" placeholder="+49 123 4567890" />
        
        <label for="message">Message</label>
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
    </div>
  );
}

function App() {
  return (
    <ContactForm />
  );
}
export default App;
