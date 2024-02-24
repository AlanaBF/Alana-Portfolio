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
import Posts from "./components/BlogJS/Posts";
import Post1 from "./components/BlogJS/Post1";
import Post2 from "./components/BlogJS/Post2";
import Post3 from "./components/BlogJS/Post3";
import Post4 from "./components/BlogJS/Post4";
import Post5 from "./components/BlogJS/Post5";
import Post6 from "./components/BlogJS/Post6";
const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/Credentials" element={<Credentials />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route exact path="/" element={<Posts />} />
        <Route path="/post1" element={<Post1 />} />
        <Route path="/post2" element={<Post2 />} />
        <Route path="/post3" element={<Post3 />} />
        <Route path="/post4" element={<Post4 />} />
        <Route path="/post5" element={<Post5 />} />
        <Route path="/post6" element={<Post6 />} />
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
