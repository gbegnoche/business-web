import { Route, Routes } from "react-router-dom";
import About from "./About";
import GameJams from "./GameJams";
import Experience from "./Experience";

export const Body = () => (
  <main>
    <div>
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<GameJams />} />
        <Route
          path="/contact"
          element={
            <a href="mailto: contact@garettbegnoche.com">
              contact@garettbegnoche.com
            </a>
          }
        />
      </Routes>
    </div>
  </main>
);

export default Body;
