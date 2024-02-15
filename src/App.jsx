import React from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route,
} from "react-router-dom";
import {
  Home,
  Credentials,
  Contact,
  ProfessionalProjects,
  ProjectGallery,
  CollaborativeProjects,
  Blog,
  NotFound,
  GamesGallery,
  Fun
} from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post1 from "./components/BlogJS/Post1";
import Post2 from "./components/BlogJS/Post2";
import Post3 from "./components/BlogJS/Post3";
import Post4 from "./components/BlogJS/Post4";

const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/Credentials" element={<Credentials />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Post1" element={<Post1 />} />
        <Route path="/Post2" element={<Post2 />} />
        <Route path="/Post3" element={<Post3 />} />
        <Route path="/Post4" element={<Post4 />} />
        <Route
          path="/ProfessionalProjects"
          element={<ProfessionalProjects />}
        />
        <Route path="/ProjectGallery" element={<ProjectGallery />} />
        <Route
          path="/CollaborativeProjects"
          element={<CollaborativeProjects />}
        />
        <Route path="/GamesGallery" element={<GamesGallery />} />
        <Route path="/Fun" element={<Fun />} />
        <Route path="*" element={<NotFound />} />
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
