import { Routes, Route } from "react-router-dom";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";

function App() {
  return (
    <div>
      <Navbar />
      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
