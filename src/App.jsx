import React from "react";
import {
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Exercise1 from "./pages/Exercise1/exercise1";
import Exercise2 from "./pages/Exercise2/exercise2";
import Exercise4 from "./pages/Exercise4/exercise4";
import Exercise5 from "./pages/Exercise5/exercise5";

function App() {
  return (
    <VStack>
      <BrowserRouter>
        <Breadcrumb mt={5}>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/">Exercício 1</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/exercise2">Exercício 2</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/exercise4">Exercício 4</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/exercise5">Exercício 5</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Routes>
          <Route exact path="/" element={<Exercise1 />} />
          <Route path="/exercise2" element={<Exercise2 />} />
          <Route path="/exercise4" element={<Exercise4 />} />
          <Route path="/exercise5" element={<Exercise5 />} />
        </Routes>
      </BrowserRouter>
    </VStack>
  );
}

export default App;
