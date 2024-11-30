import { Route, Routes } from "react-router-dom";
import Tabs from "./components/Tabs";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
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
        <div>
          <Tabs />
          <Routes>
            <Route path={"/"} element={<div />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/contact"} element={<Contact />} />
          </Routes>
        </div>
      </main>

      <footer>
        <p>
          Website designed and built by me in <b>Visual Studio Code</b> using{" "}
          <b>React Typescript</b>.
        </p>
      </footer>
    </div>
  );
}

export default App;
