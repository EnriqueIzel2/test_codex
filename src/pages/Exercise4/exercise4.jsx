import React, { useEffect, useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";

function Exercise4() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ name: "", description: "" });
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const tasksStorage = localStorage.getItem("tasks");

    if (tasksStorage) {
      setTasks(JSON.parse(tasksStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask() {
    if (task.name && task.description) {
      setTasks((prevState) => [...prevState, task]);
      onClose();
      setTask({ name: "", description: "" });
    } else {
      toast({
        title: "Preencha todos os campos",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }

  function handleDeleteTask(name) {
    const findTask = tasks.filter((task) => task.name !== name);
    setTasks(findTask);
  }

  return (
    <Flex h="90vh">
      <VStack>
        <Heading mt={5} mb={5} alignSelf="center">
          Todo Top
        </Heading>
        <Button onClick={onOpen}>Adicionar tarefa</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Criar Nova Tarefa</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Título da Tarefa</FormLabel>
                <Input
                  onChange={(e) =>
                    setTask((prevState) => {
                      return { ...prevState, name: e.target.value };
                    })
                  }
                  placeholder="Ex: comprar pão"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Descrição</FormLabel>
                <Input
                  onChange={(e) =>
                    setTask((prevState) => {
                      return { ...prevState, description: e.target.value };
                    })
                  }
                  placeholder="Adicione uma descrição curta"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={handleAddTask} colorScheme="blue" mr={3}>
                Adicionar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <TableContainer mt={5}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Atividade</Th>
                <Th>Descrição</Th>
                <Th>Ação</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tasks.map((task, index) => (
                <Tr>
                  <Td key={index}>{task.name}</Td>
                  <Td>{task.description}</Td>
                  <Td>
                    <IconButton
                      onClick={() => handleDeleteTask(task.name)}
                      colorScheme="red"
                      icon={<RiDeleteBin2Line />}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Flex>
  );
}

export default Exercise4;
