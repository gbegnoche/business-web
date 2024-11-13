import { Route, Routes } from "react-router-dom";
import Tab from "./components/Tab";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <header>
        <h1>Garett Begnoche</h1>
        <h2>Design and development</h2>
      </header>
      <main>
        <div className="tab-container">
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
