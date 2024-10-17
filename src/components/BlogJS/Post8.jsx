import React, { useState } from "react";
import { Card, Modal, Button, Carousel, Row, Col } from "react-bootstrap";
import "../../assets/styles/pages.css";
import Bangalore from "./assets/Road to Bangalore graphic.png";
import Bangalore1 from "./assets/road to bangalore banner.png";
import Image1 from "./assets/IMG_0020.jpeg";
import Image2 from "./assets/IMG_0012.jpeg";
import Image3 from "./assets/IMG_0038.jpeg";
import Image4 from "./assets/IMG_0039.jpeg";
import Image5 from "./assets/IMG_0040.jpeg";
import Results1 from "./assets/IMG_0140.png";
import Results2 from "./assets/IMG_0139.png";
import Results3 from "./assets/IMG_0138.png";

const Post8 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
  <Card className="post-card shadow-sm mb-4">
        <Card.Img variant="top" src={Bangalore} alt="Road to Bangalore Thumbnail" />
        <Card.Body className="text-center">
          <Card.Title className="text-truncate">Road to Bangalore: Step Challenge</Card.Title>
          <Card.Text className="text-muted">17/10/2024</Card.Text>
          <Button variant="primary" className="blogReadMoreButton" onClick={handleShowModal}>
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
            <Modal.Title id="modal-title">
              Road to Bangalore: Step Challenge
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={Bangalore1}
              alt="Road to Bangalore Banner"
              className="modalImages img-fluid mb-3"
            />
            <p>
              From September 23rd to October 14th, we embarked on a rewarding
              journey to walk the distance from Cork to Bangalore, visiting all
              of the offices in between as part of our annual Step Challenge.
              This challenge culminated in the Version 1 Excellence Awards. It
              was a fantastic opportunity to strengthen our Version 1 community
              and connect with colleagues across different practices and
              locations.
            </p>
            <p>
              <strong>
                I’m excited to share my personal progress during the challenge:
              </strong>
            </p>
            <ul>
              <li>
                Total Steps: <strong>147,497</strong>
              </li>
              <li>
                Total Distance: <strong>112.68 km</strong>
              </li>
              <li>
                Total Exercise Minutes: <strong>1,243 minutes</strong>
              </li>
              <li>
                Average Daily Steps: <strong>10,320 steps</strong>
              </li>
            </ul>
            <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block carousel-image img-fluid"
                      src={Results1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block carousel-image img-fluid"
                      src={Results2}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block carousel-image img-fluid"
                      src={Results3}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  </Carousel>

            <p>
              <strong>Fun Facts:</strong>
            </p>
            <ul>
              <li>
                <strong>Total Distance Covered:</strong> 112.68 km is also
                approximately the distance from Cornwall to Bristol or from
                London to Portsmouth.
              </li>
              <li>
                <strong>Total Steps Taken:</strong> 147,497, roughly equivalent
                to climbing the height of Mount Everest more than 17 times
                (height: 8,848 meters).
              </li>
              <li>
                <strong>Average Daily Steps:</strong> 10,320 steps, surpassing
                the commonly recommended 10,000 steps per day.
              </li>
              <li>
                <strong>Longest Day:</strong> On October 6th, I recorded 11,109
                steps, covering 7.83 km. The weather that day was absolutely
                horrendous—we got completely soaked walking along the beach.
                Despite the rain, it was a memorable adventure, and I even
                managed to capture some photos from that walk.
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block carousel-image img-fluid"
                      src={Image1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block carousel-image img-fluid"
                      src={Image2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block carousel-image img-fluid"
                      src={Image3}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block carousel-image img-fluid"
                      src={Image4}
                      alt="Fourth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block carousel-image img-fluid"
                      src={Image5}
                      alt="Fifth slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </li>
              <li>
                <strong>Total Exercise Minutes:</strong> 1,243 minutes—that’s
                over <strong>20 hours</strong> of physical activity!
              </li>
            </ul>
            <p>
              Whilst I had no hope of keeping up with the front runners who were
              literally running, for me the pleasure was in changing my mindset
              to start exercising properly again and every day.
            </p>
            <p>
              Every lunchtime, I used my time with purpose and went for a
              45-minute walk. This has had so many positive impacts—not least
              getting me away from my desk and having a proper break during the
              day. I have a tendency to get absorbed in what I am doing
              otherwise.
            </p>
            <p>
              Moving forward, I will continue my own mini step challenge, and as
              my habits change, I will aim to achieve{" "}
              <strong>10,000 steps daily</strong>, close my Apple rings, and
              gradually build up my fitness to play all the sports I used to 10
              years ago.
            </p>
            <p>
              Maybe that's a mini challenge I should do one day—taking on the
              distance in a dedicated few days of walking to see if I can
              complete it! Based on my total exercise minutes and the distance
              traveled, if I applied a "work day" approach of walking
              approximately 8 hours a day, I can estimate how long it would have
              taken me to physically walk the entire challenge distance in real
              life:
            </p>
            <Row>
              <Col>
                <ul>
                  <li>
                    Total Distance: <strong>112.68 km</strong>
                  </li>
                  <li>
                    Average Walking Speed: <strong>5 km/h</strong>
                  </li>
                  <li>
                    Time Required to Walk the Distance:{" "}
                    <strong>112.68 km / 5 km/h = 22.54 hours</strong>
                  </li>
                  <li>
                    Daily Walking Hours: If I walked for{" "}
                    <strong>8 hours per day</strong>, it would take
                    approximately <strong>3 days</strong> to complete the 112.68
                    km journey.
                  </li>
                </ul>
              </Col>
            </Row>
            <p>
              In fact, even better, I want to walk the South West Coast Path in
              sections. It would be amazing to dedicate some long weekends to
              walking the South West Coastal Path from beginning to end. Sharing
              some of the images and routes I recorded along the way would be a
              great way to document the journey and inspire others!
            </p>
            <p>
              Hadrian's Wall Path could be an amazing holiday challenge—walking
              coast to coast across northern England in one go. The path is
              about <strong>135 km long</strong>, stretching from Wallsend in
              the east to Bowness-on-Solway in the west. It would be an
              incredible experience to complete it as a dedicated walking
              holiday, combining history, scenery, and fitness.
            </p>
            <p>
              I see a plan coming together... in fact,
              <blockquote>
                <em>"I love it when a plan comes together!"</em>
              </blockquote>
            </p>

            <div className="embed-responsive embed-responsive-16by9 mb-3">
              <iframe
                src="https://giphy.com/embed/l3vR6aasfs0Ae3qdG"
                className="embed-responsive-item"
                allowFullScreen
              ></iframe>
            </div>
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

export default Post8;
