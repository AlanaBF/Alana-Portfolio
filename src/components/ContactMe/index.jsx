import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../assets/styles/components.css";

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
      <Form.Group controlId="formBasicEmail">
        <Form.Group>
          <Form.Label className="formlabel">Your Name</Form.Label>
          <Form.Control className="forminput" type="text" name="user_name" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="formlabel">Email address</Form.Label>
          <Form.Control className="forminput" type="email" name="user_email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="messagelabel">Send me a message</Form.Label>
          <Form.Control
            className="messagebox"
            name="message"
            as="textarea"
            rows={4}
          />
        </Form.Group>
        <Button className="submit-button" variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ContactMe;
