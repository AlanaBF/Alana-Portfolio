import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./contactMe.css"
//code from emailjs.com
export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_99u3qlb",
        "template_nitxcgg",
        form.current,
        "vqkUjg6fo6Dtcq3Tf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Group className="mb-1">
          <Form.Label className="formlabel">Your Name</Form.Label>
          <Form.Control className="forminput" type="text" name="user_name" />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="formlabel">Email address</Form.Label>
          <Form.Control className="forminput" type="email" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label className="messagelabel">Send me a message</Form.Label>
          <Form.Control className="messagebox" name="message" />
        </Form.Group>
        <Button className="submit-button" variant="primary" type="submit" value="Send">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ContactMe;
