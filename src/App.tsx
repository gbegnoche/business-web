import { Route, Routes } from "react-router-dom";
import Tab from "./components/Tab";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./App.css";
import "./App.dark.css";
import "./properties.css";

function App() {
  return (
    <>
      <header>
        <span>
          <h1>Garett Begnoche</h1>
          <h2>. design and development</h2>
        </span>
        <hr />
        <span>
          <p>Freelance Software Engineer | UI design | Web Services</p>
        </span>
      </header>

      <main>
        <div role="tablist" className="tab-container">
          <Tab to="./about">About</Tab>
          <Tab to="./projects">Projects</Tab>
          <Tab to="./contact">Contact</Tab>
        </div>
        <div className="content">
          <Routes>
            <Route path={"/about"} element={<About />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/contact"} element={<Contact />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
