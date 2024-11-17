import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { getTheme } from "./utility/getTheme.ts";
import GlobalStateProvider from "./providers/GlobalStateProvider.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <GlobalStateProvider value={{ theme: getTheme() }}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </GlobalStateProvider>
);
