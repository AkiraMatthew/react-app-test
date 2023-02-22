import React from "react";
import PlanetsScreen from "./screens/planets";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlanetsScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;