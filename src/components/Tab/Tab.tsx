import {
  To,
  useLocation,
  useNavigate,
  useResolvedPath,
} from "react-router-dom";
import "./Tab.css";
import { ReactNode } from "react";

export type TabProps = {
  children: ReactNode;
  to: To;
};

export const Tab: React.FunctionComponent<TabProps> = ({ children, to }) => {
  const navigate = useNavigate();

  const { pathname: toPathname } = useResolvedPath(to);
  const { pathname: locationPathname } = useLocation();

  const selected = locationPathname.startsWith(toPathname);

  return (
    <button
      className="tab"
      role="tab"
      onClick={() => navigate(to)}
      aria-selected={selected}
    >
      {children}
    </button>
  );
};

export default Tab;
