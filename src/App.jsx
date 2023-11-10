import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Poney from "./pages/Poney";
import Contact from "./pages/Contact";
import About from "./pages/Aboutus";

// Import css
import HeaderScss from "./partials/Header.scss";
import NavScss from "./partials/Nav.scss";
import FooterScss from "./partials/Footer.scss";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poney" element={<Poney />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
