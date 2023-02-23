import React from "react";
import PlanetsScreen from "./components/screens/planets";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanetScreen from "./components/screens/planet";


export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlanetsScreen />} />
        <Route path="/planet" element={<PlanetScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;