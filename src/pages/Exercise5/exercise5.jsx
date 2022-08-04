import React, { useEffect, useState } from "react";
import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

const URL = "http://worldclockapi.com/api/json/utc/now";

function Exercise5() {
  const [localTime, setLocalTime] = useState("");
  const [utcTime, setUtcTime] = useState("");

  useEffect(() => {
    const  getTime = async () =>  {
      const response = await fetch(URL);
      const data = await response.json();
      const localDate = new Date().toLocaleString();
      
      setLocalTime(localDate);
      setUtcTime(data.currentDateTime);
    }
  
    getTime();
  },[]);

  return (
    <Flex>
      <VStack>
        <Heading>Exercício 5</Heading>
        <Text fontSize="3xl">Local timezone</Text>
        <Text fontWeight="bold">{localTime}</Text>

        <Text fontSize="3xl">UTC timezone</Text>
        <Text fontWeight="bold">{utcTime}</Text>
      </VStack>
    </Flex>
  );
}

export default Exercise5;
