import { Route, Routes } from "react-router-dom";
import Tab from "./components/Tab";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ThemeToggle from "./components/ThemeToggle";
import { useGlobalState } from "./providers/useGlobalState";
import "./App.css";

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
        <h3 className="subtitle">
          Freelance Software Engineer | UI design | Web Services
        </h3>
      </header>

      <main>
        <div role="tablist">
          <Tab to="./about">About</Tab>
          <Tab to="./projects">Projects</Tab>
          <Tab to="./contact">Contact</Tab>
          <ThemeToggle />
        </div>
        <div>
          <Routes>
            <Route path={"/about"} element={<About />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/contact"} element={<Contact />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
