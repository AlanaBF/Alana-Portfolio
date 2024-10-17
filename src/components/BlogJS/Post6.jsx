import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import "../../assets/styles/pages.css";
import UserAuthentication from "/GalleryImages/AuthenticationMedium.webp";
import HealthApp1 from "/GalleryImages/healthappscreenshot1.webp";
import HealthApp2 from "/GalleryImages/healthappscreenshot2.webp";
import HealthApp3 from "/GalleryImages/healthappstructure.webp";
import mainJSX from "/GalleryImages/mainJSX.png";
import appJSX from "/GalleryImages/appJSX.png";
import loginJSX from "/GalleryImages/loginJSX.png";
import logoutJSX from "/GalleryImages/logoutJSX.png";
import navbarJSX from "/GalleryImages/navbarJSX.png";
import htmlJSX from "/GalleryImages/htmlJSX.png";
import cssJSX from "/GalleryImages/cssJSX.png";

const Post6 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
   
   <Card className="post-card shadow-sm mb-4">
          <Card.Img
            variant="top"
            src={UserAuthentication}
            style={{ width: "50%", margin: "auto" }}
          />
          <Card.Body className="text-center">
            <Card.Title className="text-truncate">
              Implementing Auth0 User Authentication in a Vite-React-App
            </Card.Title>
            <Card.Text className="text-muted">
            3/1/2024
            </Card.Text>
            <Button
              className="blogReadMoreButton"
              variant="primary"
              onClick={handleShowModal}
            >
              Read More
            </Button>
          </Card.Body>
        </Card>

        <Modal
          dialogClassName="custom-modal-dialog"
          show={showModal}
          onHide={handleCloseModal}
          aria-labelledby="modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="modal-title">Implementing Auth0 User Authentication in a Vite-React-App</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ textAlign: "left" }}>
            <img
              src={UserAuthentication}
              style={{ width: "50%" }}
              alt=""
              className="modalImages"
            />
            <p>
              As a junior developer I am often navigating the complexities of
              user authentication. After a lot of research and trial and error,
              I've successfully implemented a concise solution using Auth0 in a
              Vite-React-App. This tutorial offers a straightforward,
              step-by-step approach to seamlessly integrate Auth0, a trusted
              authentication platform, into your React application. Once
              complete it should look something like this (note my own logo and
              text will not appear in your app):
            </p>
            <p>Login Page</p>
            <img src={HealthApp1} alt="" className="modalImages" />
            <p>
              Authenticated Landing Page. As you can see this page has not been
              developed yet. This is the fun bit where you get to be creative
              and design your own App.
            </p>
            <img src={HealthApp2} alt="" className="modalImages" />
            <h3>Prerequisites</h3>
            <ul>
              <li>Node.js and npm installed on your machine</li>
              <li>Basic understanding of React and JavaScript</li>
            </ul>
            <h3>Step 1: Create a New Vite React App</h3>
            <p>
              First, let's create a new Vite React JS application using the
              following commands:
            </p>
            <p>
              <em>
                npm create vite@latest app-name -- --template react<br></br>
                cd app-name<br></br>
                npm install
              </em>
            </p>
            <h3>Step 2: Install Dependencies</h3>
            <p>
              Install the necessary dependencies required for authentication:
            </p>
            <p>
              <em>
                npm install @auth0/auth0-react bootstrap react-dom
                react-router-dom
              </em>
            </p>
            <h3>Step 3: Project Structure Setup</h3>
            <p>Let's set up the initial project structure:</p>
            <ul>
              <li>
                Create a components folder and pages folder within the src
                folder.
              </li>
              <li>
                Inside the components folder, create files: LoginButton.jsx,
                LogoutButton.jsx, and Navbar.jsx.
              </li>
              <li>Inside the pages folder, create a file: Home.jsx.</li>
            </ul>
            <p>It should look similar to this:</p>
            <img
              src={HealthApp3}
              style={{ width: "20%" }}
              alt=""
              className="modalImages"
            />
            <h3>Step 4: Implementation</h3>
            <p>Now, let's add the code to the respective files:</p>
            <p>
              <em>Main.jsx</em>
            </p>
            <img src={mainJSX} alt="" className="modalImages" />
            <p>
              We will fill the empty domain and clientId fields from the AuthO
              site later in this guide.
            </p>
            <p>
              <em>App.jsx</em>
            </p>
            <img src={appJSX} alt="" className="modalImages" />
            <p>
              <em>LoginButton.jsx</em>
            </p>
            <img src={loginJSX} alt="" className="modalImages" />
            <p>
              <em>LogoutButton.jsx</em>
            </p>
            <img src={logoutJSX} alt="" className="modalImages" />
            <p>
              <em>Navbar.jsx</em>
            </p>
            <img src={navbarJSX} alt="" className="modalImages" />
            <h3>
              Step 5: Add CSS styling (you can edit this to your own
              requirements).{" "}
            </h3>
            <p>
              Please note I have used a font family from Google Fonts{" "}
              <a href="https://fonts.google.com/"> https://fonts.google.com/</a>{" "}
              <br></br>NOTE: the line with the link to the href for googlefonts
              I used has text missing off the end: swap" <br></br> You will need
              to add relevant styling to the html file:
            </p>
            <img src={htmlJSX} alt="" className="modalImages" />
            <img src={cssJSX} alt="" className="modalImages" />
            <h3>Step 6: Auth0 Configuration</h3>
            <ul>
              <li>
                Sign up for an account on{" "}
                <a href="https://auth0.com/">https://auth0.com/</a>
              </li>
              <li>
                For a UK account select other and tick the advanced box. This
                will allow you to select the country
              </li>
              <li>
                Create a new application specifying the details (e.g., Name,
                Single Page Application, Technology — React).
              </li>
              <li>
                On the side bar, select Applications and then select your
                application. Obtain your Auth0 domain and clientID from the
                created application. Add these to the empty " " in the main.jsx
                file.
              </li>
              <li>
                Set allowed callback URLs and logout URLs in the Auth0
                Application Settings. Paste this inside text box:
                http://localhost:5173/ . This will allow you to navigate to the
                desired pages.
              </li>
              <li>SAVE your changes</li>
            </ul>
            <h3>Step 7: Test Your Application</h3>
            <p>
              Run your application and ensure that authentication works as
              expected:
            </p>
            <p>
              <em>npm run dev</em>
            </p>
            <p>
              Note, to stop the application running type the following in the
              terminal
            </p>
            <p>
              <em>ctrl + c</em>
            </p>
            <h3>Conclusion</h3>
            <p>
              Congratulations! You've successfully integrated user
              authentication into your React application using Auth0. From here,
              you can expand and enhance your application with additional
              features. <br></br>
              Useful Links to Documentation:<br></br>
              Auth0: Single page app → react → add login to your react app{" "}
              <br></br>
              <a href="https://auth0.com/docs/quickstart/spa/react/interactive">
                https://auth0.com/docs/quickstart/spa/react/interactive
              </a>
              <br></br>
              Getting started with Vite React App<br></br>
              <a href="https://vitejs.dev/guide/">https://vitejs.dev/guide/</a>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
   
  );
};

export default Post6;
