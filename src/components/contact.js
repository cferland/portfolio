import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'contact_form', e.target, 'user_o5d0X8VlO5YBH6wc4YAnI')
      .then((result) => {
        console.log(result.text);
        alert('Message successfully sent!');
      }, (error) => {
        console.log(error.text);
        alert('Message failed to send! Please try again later.');
      });
  }

  return (
    <main>
      <p>
        Fill out the form below if you'd like to get in touch for any reason.
        I will do my best to respond to your message via email as quickly as possible.
        You can also view my LinkedIn and GitHub profiles by clicking the icons in the footer below.
      </p>
      <form id="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label htmlFor="user_name">Name</label>
        <input name="user_name" type="text" />
        <label htmlFor="user_email">Email</label>
        <input name="user_email" type="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" />
        <button type="submit" value="Send">Submit</button>
      </form>
    </main>
  )
}

export default Contact;