import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.styles.scss";
import { App } from "app/app.component";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
