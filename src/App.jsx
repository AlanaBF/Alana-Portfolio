import React from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route,
} from "react-router-dom";
import { Home, Credentials, Contact, ProfessionalProjects, ProjectGallery, CollaborativeProjects, Blog, NotFound, GamesGallery } from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/Credentials" element={<Credentials />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ProfessionalProjects" element={<ProfessionalProjects />} />
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
          <Route path="/CollaborativeProjects" element={<CollaborativeProjects />} />
          <Route path="/GamesGallery" element={<GamesGallery />} />
          <Route path="*" element={<NotFound />} />
        </Route>
  )
  )
  return <RouterProvider router={router} />
    }
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
    )
  }

export default App;