import React from "react";
import { Input, Button, Flex, VStack, Heading } from "@chakra-ui/react";

function Exercise1({ handleInputCNPJ, setInputCnpj }) {
  return (
    <Flex h="90vh">
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
