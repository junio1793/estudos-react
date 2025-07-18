import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TesteApp from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TesteApp />
  </StrictMode>
);
