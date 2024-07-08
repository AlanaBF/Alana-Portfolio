import React from "react";
import { Row } from "react-bootstrap";
import "../../assets/styles/pages.css";
import AIEngineerPDF from "./assets/AIEngineerAssociate.pdf";
import GitHelpPDF from "./assets/GitHelp.pdf";
import AIFundamentalsPDF from "./assets/AIFundamentals.pdf";
import PdfModal from "./PdfModal";
import PdfCard from "./PdfCard";
import aiEngineerImage from "./assets/ai_engineer_image.png";
import aiFundamentalsImage from "./assets/ai_fundamentals_image.png";
import gitHelpImage from "./assets/git_help_image.png";
import Article from "../../components/Articles";
import Copilot from "/GalleryImages/GitHubCopilotMedium.webp";
import Authentication from "/GalleryImages/AuthenticationMedium.webp";

function Resources() {
  const [showAIEngineer, setShowAIEngineer] = React.useState(false);
  const [showAIFundamentals, setShowAIFundamentals] = React.useState(false);
  const [showGitHelp, setShowGitHelp] = React.useState(false);

  const openModal = (type) => {
    switch (type) {
      case "AIEngineer":
        setShowAIEngineer(true);
        break;
      case "AIFundamentals":
        setShowAIFundamentals(true);
        break;
      case "GitHelp":
        setShowGitHelp(true);
        break;
      default:
        break;
    }
  };

  const closeModal = (type) => {
    switch (type) {
      case "AIEngineer":
        setShowAIEngineer(false);
        break;
      case "AIFundamentals":
        setShowAIFundamentals(false);
        break;
      case "GitHelp":
        setShowGitHelp(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="pageBackgroundHome">
      <h1 className="pageTitle">My Resources</h1>
      <p style={{ color: "var(--dark-blue)" }}>
        As I learn and develop in my role, I will produce resources that will help
        me, but also hopefully help others as well. If you are looking, I hope
        these are useful.
      </p>
      <h1 style={{ color: "var(--dark-blue)" }}>PDF Resources</h1>
      <Row className="justify-content-center">
        <PdfCard
          title="Microsoft Certified AI Engineer Associate"
          description="AI-102 Certification Guidance"
          imageSrc={aiEngineerImage}
          onClick={() => openModal("AIEngineer")}
        />

        <PdfCard
          title="Microsoft Certified AI Fundamentals"
          description="AI-900 Certification Guidance"
          imageSrc={aiFundamentalsImage}
          onClick={() => openModal("AIFundamentals")}
        />

        <PdfCard
          title="Git Help"
          description="Learn Git basics and more"
          imageSrc={gitHelpImage}
          onClick={() => openModal("GitHelp")}
        />
      </Row>
      <h1 style={{ color: "var(--dark-blue)" }}>PDF Resources</h1>
      <Row className="justify-content-center mt-5 p-5">
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
      </Row>

      <PdfModal
        show={showAIEngineer}
        onHide={() => closeModal("AIEngineer")}
        title="Microsoft Certified AI Engineer Associate - AI-102 Certification Guidance"
        pdfUrl={AIEngineerPDF}
      />

      <PdfModal
        show={showAIFundamentals}
        onHide={() => closeModal("AIFundamentals")}
        title="Microsoft Certified AI Fundamentals - AI-900 Certification Guidance"
        pdfUrl={AIFundamentalsPDF}
      />

      <PdfModal
        show={showGitHelp}
        onHide={() => closeModal("GitHelp")}
        title="Git Help"
        pdfUrl={GitHelpPDF}
      />
    </div>
  );
}

export default Resources;
