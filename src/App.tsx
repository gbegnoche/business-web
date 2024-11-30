import { Route, Routes } from "react-router-dom";
import Tabs from "./components/Tabs";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { useGlobalState } from "./providers/useGlobalState";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import { GameJams } from "./components/GameJams";

function App() {
  const { state } = useGlobalState();

  return (
    <div id="app-container" data-theme={state.theme}>
      <header>
        <span>
          <h1>Garett Begnoche</h1>
          <h2>design + development</h2>
        </span>
        <hr />
        <span>
          <h3 className="subtitle">
            Freelance Software Engineer | UI design | Web Services
          </h3>
          <Tabs />
          <ThemeToggle />
        </span>
      </header>

      <main>
        <div>
          <Routes>
            <Route path="/" element={<div />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/gamejams" element={<GameJams />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      <footer>
        <p>
          Website designed and built by me in <b>Visual Studio Code</b> using{" "}
          <b>React Typescript</b>.<br />
          <a href="mailto: contact@garettbegnoche.com">
            contact@garettbegnoche.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
