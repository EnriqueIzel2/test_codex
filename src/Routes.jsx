import React from "react";
import { BrowserRouter,Route, Routes,  } from "react-router-dom";

import Exercise1 from "./pages/Exercise1/exercise1";
import Exercise2 from "./pages/Exercice2/exercise2";

function RoutesController() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Exercise1 />} />
        <Route exact path="/exercise2" element={<Exercise2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesController;
