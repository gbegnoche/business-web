import { useGlobalState } from "../providers/useGlobalState";
import IconLight from "../assets/images/theme-icon-light.svg";
import IconDark from "../assets/images/theme-icon-dark.svg";

const ThemeToggle = () => {
  const { state, setState } = useGlobalState();

  const onClick = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    setState((prev) => ({
      ...prev,
      theme: newTheme,
    }));
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onClick}
      aria-label={
        state.theme === "light"
          ? "Change to dark theme"
          : "Change to light theme"
      }
    >
      <img src={state.theme === "light" ? IconDark : IconLight} />
    </button>
  );
};

export default ThemeToggle;
