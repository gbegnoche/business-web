import { Route, Routes } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./body.css";

export const Body = () => (
  <div className="body-container">
    <Tabs />
    <Routes>
      <Route path={"/about"} element={<About />} />
      <Route path={"/contact"} element={<Contact />} />
    </Routes>
  </div>
);

export default Body;
