import {
  To,
  useLocation,
  useNavigate,
  useResolvedPath,
} from "react-router-dom";

export type TabProps = {
  children: React.ReactNode;
  to: To;
};

export const Tab: React.FunctionComponent<TabProps> = ({ children, to }) => {
  const navigate = useNavigate();

  const { pathname: toPathname } = useResolvedPath(to);
  const { pathname: locationPathname } = useLocation();

  const selected = locationPathname.startsWith(toPathname);

  return (
    <button
      className={selected ? "selected-tab" : ""}
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
      <Tab to="./experience">Experience</Tab>
      {/* <Tab to="./gamejams">Game Jams</Tab> */}
      <Tab to="./contact">Contact</Tab>
    </div>
  );
};

export default Tabs;
