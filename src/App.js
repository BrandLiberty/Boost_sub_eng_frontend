import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen from "./container/screen/Screen.js";
import Home from "./container/component/home/home.js";
import Contact from "./container/component/contact/contact.js";
import About from "./container/component/about/About.js";
import Services from "./container/component/services/Services.js";
import Gallery from "./container/component/gallery/gallery.js";
import Treading from "./container/component/treading/Treading.js";
import Branch from "./container/component/molecules/Branch.js";
import Project from "./container/component/project/Project.js";

function App() {
  return (
    <BrowserRouter>
        <Screen>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/treading" element={<Treading />} />
            <Route path="/branch" element={<Branch />} />
            <Route path="/project" element={<Project />} />
            
          </Routes>
        </Screen>
      </BrowserRouter>
  );
}

export default App;
