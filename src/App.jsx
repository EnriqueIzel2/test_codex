import { useState } from "react";
import {
  VStack,
  useToast,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { validateCNPJ, isValidCnpjFormat } from "./pages/Exercise1/utils";
import Exercise1 from "./pages/Exercise1/exercise1";
import Exercise2 from "./pages/Exercise2/exercise2";
import Exercise4 from "./pages/Exercise4/exercise4";

function App() {
  const [inputCNPJ, setInputCnpj] = useState("");
  const toast = useToast();

  function handleInputCNPJ() {
    if (isValidCnpjFormat(inputCNPJ)) {
      const cnpj = inputCNPJ
        .replace(/[^\d]+/g, "")
        .split("")
        .map((digit) => parseInt(digit));

      const isValidCNPJ = validateCNPJ(cnpj);

      if (isValidCNPJ) {
        toast({
          title: "CNPJ válido",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "CNPJ inválido",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Não parece com CNPJ",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

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
              <Link to="/exercise4">Exercício 4</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Exercise1
                setInputCnpj={setInputCnpj}
                handleInputCNPJ={handleInputCNPJ}
              />
            }
          />
          <Route exact path="/exercise2" element={<Exercise2 />} />
          <Route exact path="/exercise4" element={<Exercise4 />} />
        </Routes>
      </BrowserRouter>
    </VStack>
  );
}

export default App;
