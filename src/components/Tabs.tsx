import {
  To,
  useLocation,
  useNavigate,
  useResolvedPath,
} from "react-router-dom";

export type TabProps = {
  children: React.ReactNode;
  to?: To;
};

export const Tab: React.FunctionComponent<TabProps> = ({ children, to }) => {
  const navigate = useNavigate();

  const { pathname: toPathname } = useResolvedPath(to || "");
  const { pathname: locationPathname } = useLocation();

  const selected = locationPathname.startsWith(toPathname);

  if (!to) {
    return (
      <button className="tab" role="tab">
        {children}
      </button>
    );
  }

  return (
    <button
      className={selected ? "selected-tab" : "tab"}
      role="tab"
      onClick={() => navigate(to)}
      aria-selected={selected}
    >
      {children}
    </button>
  );
};

export const Tabs = () => {
  return (
    <div role="tablist">
      <Tab to="./about">About</Tab>
      <Tab to="./projects">Projects</Tab>
      <Tab>
        <a href="mailto: contact@garettbegnoche.com">Contact</a>
      </Tab>
    </div>
  );
};

export default Tabs;
