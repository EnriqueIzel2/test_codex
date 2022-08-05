import React, { useRef, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";

import { intersects, RectanglePoints } from "./utils";

function Exercise2() {
  const [recAInput, setRecAInput] = useState([0, 0, 0, 0]);
  const [recBInput, setRecBInput] = useState([0, 0, 0, 0]);
  const [recCInput, setRecCInput] = useState([0, 0, 0, 0]);
  const [hasIntersection, setHasIntersection] = useState([]);

  function handleIntersect() {
    const recA = new RectanglePoints(recAInput);
    const recB = new RectanglePoints(recBInput);
    const recC = new RectanglePoints(recCInput);

    const intersectionAB = intersects(recA, recB);
    const intersectionAC = intersects(recA, recC);
    const intersectionBC = intersects(recB, recC);

    setHasIntersection([intersectionAB, intersectionAC, intersectionBC]);
  }

  function handleRecValues(value, pos, recX) {
    value = parseInt(value);

    if (recX === "A") {
      setRecAInput((prevState) => [...prevState, prevState[pos] = value]);
    }
    if (recX === "B") {
      setRecBInput((prevState) => [...prevState, prevState[pos] = value]);
    }
    if (recX === "C") {
      setRecCInput((prevState) => [...prevState, prevState[pos] = value]);
    }
  }

  return (
    <Container>
      <Heading>Exercício 2</Heading>
      <FormControl>
        <FormLabel>Coordenadas do Retângulo A</FormLabel>
        <HStack>
          <Input
            type="number"
            onChange={(e) => handleRecValues(e.target.value,0, "A")}
            placeholder="Valor de x1"
          />
          <Input
            type="number"
            onChange={(e) => handleRecValues(e.target.value, 1, "A")}
            placeholder="Valor de y1"
          />
          <Input
            type="number"
            onChange={(e) => handleRecValues(e.target.value, 2, "A")}
            placeholder="Valor de x2"
          />
          <Input
            type="number"
            onChange={(e) => handleRecValues(e.target.value, 3, "A")}
            placeholder="Valor de y2"
          />
        </HStack>

        <FormLabel>Coordenadas do Retângulo B</FormLabel>
        <HStack>
          <Input
            type="number"
            onChange={(e) => handleRecValues(e.target.value, 0, "B")}
            placeholder="Valor de x1"
          />
          <Input
            type="number"
            onChange={(e) => handleRecValues(e.target.value, 1, "B")}
            placeholder="Valor de y1"
          />
          <Input
            type="number"
            onChange={(e) => handleRecValues(e.target.value, 2, "B")}
            placeholder="Valor de x2"
          />
          <Input
            type="number"
            onChange={(e) => handleRecValues(e.target.value, 3, "B")}
            placeholder="Valor de y2"
          />
        </HStack>

        <FormLabel>Coordenadas do Retângulo C</FormLabel>
        <HStack>
          <Input
            type="number"
            onChange={(e) => handleRecValues(e.target.value, 0, "C")}
            placeholder="Valor de x1"
          />
          <Input
            type="number"
            onChange={(e) => handleRecValues(e.target.value, 1, "C")}
            placeholder="Valor de y1"
          />
          <Input
            type="number"
            onChange={(e) => handleRecValues(e.target.value, 2, "C")}
            placeholder="Valor de x2"
          />
          <Input
            type="number"
            onChange={(e) => handleRecValues(e.target.value, 3, "C")}
            placeholder="Valor de y2"
          />
        </HStack>
        <Button type="submit" onClick={handleIntersect} mt={5}>
          Verificar se há interseção
        </Button>
      </FormControl>

      <Text mt={5}>
        A e B: {hasIntersection.length ? hasIntersection[0].toString() : ""}
      </Text>
      <Text>
        A e C: {hasIntersection.length ? hasIntersection[1].toString() : ""}
      </Text>
      <Text>
        B e C: {hasIntersection.length ? hasIntersection[2].toString() : ""}
      </Text>
    </Container>
  );
}

export default Exercise2;
