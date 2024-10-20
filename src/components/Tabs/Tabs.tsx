import { Link } from "react-router-dom";
import "./Tabs.css";

export const Tabs = () => {
  const tabs = ["about", "contact"];

  return (
    <div className="tab-container">
      {tabs.map((tab) => (
        <Link to={`/${tab}`} className="tab">
          {tab}
        </Link>
      ))}
    </div>
  );
};
export default Tabs;
