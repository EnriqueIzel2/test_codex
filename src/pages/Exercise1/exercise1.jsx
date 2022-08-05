import React, { useState } from "react";
import { Input, Button, Flex, VStack, Heading, useToast } from "@chakra-ui/react";

import { validateCNPJ, isValidCnpjFormat } from "./utils";

function Exercise1() {
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
    <Flex h="90vh" align="center">
      <VStack>
        <Heading>Validador de CNPJ</Heading>
        <form>
          <Input
            id="cnpj"
            type="text"
            variant="filled"
            placeholder="Digite o CNPJ"
            onChange={(e) => setInputCnpj(e.target.value)}
          />
        </form>
        <Button variantColor="green" onClick={handleInputCNPJ}>
          Validar CNPJ
        </Button>
      </VStack>
    </Flex>
  );
}

export default Exercise1;
