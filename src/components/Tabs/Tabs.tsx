import {
  To,
  useLocation,
  useNavigate,
  useResolvedPath,
} from "react-router-dom";
import "./Tabs.css";

export const Tabs = () => {
  return (
    <div className="tab-container">
      <Tab className="tab" to="/about">
        about
      </Tab>
      <div className="underline" />
      <Tab className="tab" to="/contact">
        contact
      </Tab>
      <div className="underline" />
    </div>
  );
};

export type TabProps = {
  to: To;
};

export const Tab: React.FunctionComponent<
  TabProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ children, to, className }) => {
  const navigate = useNavigate();

  const { pathname: toPathname } = useResolvedPath(to);
  const { pathname: locationPathname } = useLocation();

  const selected = locationPathname.startsWith(toPathname);

  return (
    <button
      className={className}
      role="tab"
      onClick={() => navigate(to)}
      aria-selected={selected}
    >
      {children}
    </button>
  );
};

export default Tabs;
