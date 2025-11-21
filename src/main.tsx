import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AvatarProvider } from "./context/AvatarContext.tsx";
import { ColorProvider } from "./context/ColorContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AvatarProvider>
      <ColorProvider>
        <App />
      </ColorProvider>
    </AvatarProvider>
  </StrictMode>
);
