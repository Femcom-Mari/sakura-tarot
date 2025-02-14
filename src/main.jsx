import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Router from "./config/router/Router.jsx";
import { AudioProvider } from "./context/AudioContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <AudioProvider>
    <Router />
    </AudioProvider>
  </StrictMode>
);
