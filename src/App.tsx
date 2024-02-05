import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const Homepage = lazy(() => import("./pages/Homepage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/progetti" element={<ProjectPage />} />
          <Route path="/contatti" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
