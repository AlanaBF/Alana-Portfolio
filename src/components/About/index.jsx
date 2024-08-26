import React from "react";
import "../../assets/styles/components.css";
import Copilot from "/GalleryImages/GitHubCopilotMedium.webp";
import AIMedium from "../../assets/AIMedium.webp";
import Certificate from "../../assets/certificate.webp";
import Authentication from "/GalleryImages/AuthenticationMedium.webp";
import logo from "../../assets/teacherturnsturtle.png";
import Article from "../../components/Articles";
import AILabs from "/ai-labs.webp"
import PDFsplitter from "/pdf-splitter.webp"
function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutCard">
        <div className="portfolio-content">
          <p className="about-text">
            I am a former teacher turned Front End Developer. I took a massive
            leap of faith to leave teaching after 20 years and embark on a
            completely new chapter in my life!
          </p>
          <p className="about-text">
            After completing a rigorous 16-week intensive bootcamp in Front End
            Web Development through the government-funded program with EdX
            Trilogy Skills, I have made a career change possible. This
            transformative journey has enabled me to discover a sector that I'm
            passionate about.
          </p>
          <p className="about-text">
            More recently, I have completed the West Midlands Digital Skills
            Academy with Version 1. This program has provided me with a diverse
            range of valuable skills and knowledge.
          </p>
          <p>
            I have now started as a permanent member of the team as an Associate
            Consultant. My first project is allowing me to learn the Business
            Analyst and AI Engineer Roles in greater detail. As I embark on this
            exciting trajectory, I'm excited to contribute my skills and
            creativity to the ever-evolving landscape of technology, harnessing
            my background in education to bring a unique perspective to my
            endeavors in the tech world.
          </p>
          <p>
            As part of my transition and sharing my story I have also started to
            blog my journey of teacherturnsturtle{" "}
            <img width="50px" src={logo} alt="Teacher Turns Turtle Logo" />
          </p>
          <p>You can follow my journey here:</p>
          <div className="m-auto">
            <a
              href="https://www.instagram.com/teacherturnsturtle81/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3"
            >
              <i className="fa fa-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com/teacherturnsturtle"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </div>
          <p>
            To document my learning and journey, I will create resources that
            help me but also will help others as well. I have started writing
            articles for Medium as well as my Blog Spot.
          </p>
          <a
            href="https://medium.com/@alana.barrettfrew"
            className="btn btn-warning"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow me on Medium @alana.barrettfrew
          </a>

          <div className="row">
          <Article
              title="Automating PDF Splitting with Python: A Step-by-Step Guide"
              imageSrc={PDFsplitter}
              description="Every day is a learning day! As a relative newcomer to the world of development, I am constantly discovering the simple yet powerful uses of Python to make tasks easier — and all without the need for expensive subscriptions."
              articleUrl="https://medium.com/version-1/automating-pdf-splitting-with-python-a-step-by-step-guide-707689041282"
            />
             <Article
              title="My Time with the Awesome Version 1 AI Labs Team"
              imageSrc={AILabs}
              description="As an Associate Consultant on the Early Careers Pathway with Version 1, I am constantly given incredible opportunities to learn and grow. As they say, the best way to learn is to jump in at the deep end and either sink or swim. I love the ethos of my workplace that, while certification is valuable, there is truly no better way to learn than through hands-on experience. None of my experiences so far have been more impactful than my time with the AI Labs team."
              articleUrl="https://medium.com/version-1/my-time-with-the-awesome-version-1-ai-labs-team-3c51a82ce3e0"
            />
            <Article
              title="My Thoughts and Relationship with AI and Technology"
              imageSrc={AIMedium}
              description="Having successfully transitioned from a career in teaching to the world of tech and business, I’ve been captivated by the staggering potential of artificial intelligence (AI) to revolutionize our lives."
              articleUrl="https://medium.com/version-1/my-thoughts-and-relationship-with-ai-and-technology-d03b223284f2"
            />
            <Article
              title="Implementing Auth0 User Authentication in a Vite-React-App"
              imageSrc={Authentication}
              description="Learn how to implement Auth0 user authentication in your Vite-React application."
              articleUrl="https://medium.com/version-1/implementing-auth0-user-authentication-in-a-vite-react-app-4091099bd086"
            />
            <Article
              title="Exploring GitHub Copilot: A Junior Developer's Journey"
              imageSrc={Copilot}
              description="Discover the journey of a junior developer exploring GitHub Copilot."
              articleUrl="https://medium.com/version-1/exploring-github-copilot-1c4919069c7f"
            />
            <Article
              title="Unlocking Efficiency: Bulk Adding Names to Certificates with Mail Merge in Word and PowerPoint"
              imageSrc={Certificate}
              description="Learn how to use mail merge in Word and PowerPoint for bulk certificate name additions."
              articleUrl="https://medium.com/version-1/unlocking-efficiency-bulk-adding-names-to-certificates-with-mail-merge-in-word-and-powerpoint-c49559bd9d4b"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
