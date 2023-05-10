import React from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route,
} from "react-router-dom";
import { Home, Contact, ProjectGallery, Blog, CV, FreelanceDeveloper, FreelanceTutor, NotFound, Games } from "./pages"
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ProjectGallery" element={<ProjectGallery />} />
        <Route path="/FreelanceDeveloper" element={<FreelanceDeveloper />} />
        <Route path="/FreelanceTutor" element={<FreelanceTutor />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/CV" element={<CV />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

const Root = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
