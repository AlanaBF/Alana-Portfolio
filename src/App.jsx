import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Contact, ProjectGallery, CollaborativeProjects, Blog, CV, FreelanceDeveloper, FreelanceTutor, NotFound, GamesGallery } from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
          <Route path="/CollaborativeProjects" element={<CollaborativeProjects />} />
          <Route path="/FreelanceDeveloper" element={<FreelanceDeveloper />} />
          <Route path="/FreelanceTutor" element={<FreelanceTutor />} />
          <Route path="/GamesGallery" element={<GamesGallery />} />
          <Route path="/CV" element={<CV />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;