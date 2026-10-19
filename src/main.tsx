import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import RouteEffects from "./components/RouteEffects";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/nba-clutch-agent" element={<Navigate to="/projects/hoopslab" replace />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
