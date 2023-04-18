import React from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route,
} from "react-router-dom";
import { Home, Contact, ProjectGallery, Blog, Freelance, NotFound } from "./pages/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import "./App.css";
// import "./index.css";


const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" index element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ProjectGallery" element={<ProjectGallery />} />
        <Route path="/Freelance" element={<Freelance />} />
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
