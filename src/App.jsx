import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      {/* Forsiden med parallax */}
      <Route
        path="/"
        element={
          <HomeLayout>
            <HomePage />
          </HomeLayout>
        }
      />

      {/* Alle andre sider */}
      <Route
        path="/projects"
        element={
          <DefaultLayout>
            <ProjectsPage />
          </DefaultLayout>
        }
      />

      <Route
        path="/projects/:slug"
        element={
          <DefaultLayout>
            <ProjectPage />
          </DefaultLayout>
        }
      />

      <Route
        path="/about"
        element={
          <DefaultLayout>
            <AboutPage />
          </DefaultLayout>
        }
      />

      <Route
        path="/contact"
        element={
          <DefaultLayout>
            <ContactPage />
          </DefaultLayout>
        }
      />

      <Route
        path="*"
        element={
          <DefaultLayout>
            <NotFoundPage />
          </DefaultLayout>
        }
      />
    </Routes>
  );
}

export default App;
