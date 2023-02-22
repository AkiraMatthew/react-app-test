// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetsScreen from "./screens/planets";

const Root = createRoot(document.getElementById("root"));

Root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<PlanetsScreen/>}/>
    </Routes>
  </BrowserRouter>
);

export default Root