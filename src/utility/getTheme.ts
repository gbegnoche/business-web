import { Theme } from "../Types";

export const isOfTypeTheme = (keyInput: string): keyInput is Theme => {
  return ["light", "dark"].includes(keyInput);
};

export const getTheme = (): Theme => {
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

  if (localStorageTheme && isOfTypeTheme(localStorageTheme)) {
    return localStorageTheme;
  }
  if (systemSettingDark.matches) {
    return "dark";
  }
  return "light";
};
