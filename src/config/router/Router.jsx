import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../../pages/home/Home";
import History from "../../pages/history/History";
import Instructions from "../../pages/instructions/Instructions";
import Introduction from "../../pages/introduction/Introduction";
import Reading from "../../pages/reading/Reading";

import "../../../../sakura-tarot/src/index.css";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/reading" element={<Reading />} />
      </Routes>
    </BrowserRouter>
  );
}
