import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const Homepage = lazy(() => import("./pages/Homepage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Squealer from "./components/Squealer";
import HotelChc from "./components/HotelChc";
import ArticlePage from "./pages/ArticlePage";
import BlogPage from "./pages/BlogPage";
import CategoryPage from "./pages/CategoryPage";

// for SEO:
// head for every page (slug ones too)
// sitemap
// guide for next in other favorite (chrome)

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/progetti" element={<ProjectPage />} />
          <Route path="/progetti/squealer" element={<Squealer />} />
          <Route path="/progetti/hotelchc" element={<HotelChc />} />
          <Route path="/contatti" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
