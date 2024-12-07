import Tabs from "./Tabs";
import ThemeToggle from "./ThemeToggle";

export const Header = () => (
  <header>
    <h1>Garett Begnoche</h1>
    <h2>design + development</h2>
    <hr />
    <span>
      <h3 className="subtitle">
        Freelance Software Engineer | UI design | Web Services
      </h3>
      <ThemeToggle />
    </span>
    <Tabs />
  </header>
);

export default Header;
