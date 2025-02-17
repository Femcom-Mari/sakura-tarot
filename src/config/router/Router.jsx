import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../../pages/home/Home";
import History from "../../pages/history/History";
import Instructions from "../../pages/instructions/Instructions";
import Reading from "../../pages/reading/Reading";
import Meaning from "../../pages/meaning/Meaning";

import "../../../../sakura-tarot/src/index.css";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/meaning" element={<Meaning />} />
      </Routes>
    </BrowserRouter>
  );
}