import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const Homepage = lazy(() => import("./pages/Homepage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogPage from "./pages/BlogPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ArticlePage from "./pages/ArticlePage";
import Squealer from "./components/Squealer";
import HotelChc from "./components/HotelChc";
const API_URL = import.meta.env.VITE_NEXT_PUBLIC_WORDPRESS_API_ENDPOINT;

const apollo = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={apollo}>
        <Navbar />
        <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/progetti" element={<ProjectPage />} />
            <Route path="/progetti/squealer" element={<Squealer />}></Route>
            <Route path="/progetti/hotelchc" element={<HotelChc />}></Route>
            <Route path="/contatti" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<ArticlePage />}></Route>
          </Routes>
        </Suspense>
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default App;
