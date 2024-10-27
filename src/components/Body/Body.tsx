import { Route, Routes } from "react-router-dom";
import Tab from "../Tab/Tab";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./Body.css";

export const Body = () => (
  <div className="body-container">
    <div className="tab-container">
      <Tab to="./about">about</Tab>
      <Tab to="./contact">contact</Tab>
    </div>
    <Routes>
      <Route path={"/about"} element={<About />} />
      <Route path={"/contact"} element={<Contact />} />
    </Routes>
  </div>
);

export default Body;
