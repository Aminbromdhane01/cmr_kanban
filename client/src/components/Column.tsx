
import { AddIcon } from "@chakra-ui/icons";
import { Box , Stack , Heading , Badge , IconButton , useColorModeValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure, FormControl, FormLabel, Input, Select, Textarea} from "@chakra-ui/react";

import Task from "./Task";
import useColumnTasks from "../hooks/useColumnTasks";
import { TypeColum } from "../utils/enum";
import useColumnDrop from "../hooks/useColumnDrop";
import { useForm, SubmitHandler } from "react-hook-form"

import {  useState } from "react";
import { TasksModel } from "../utils/models";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const ColumnColorScheme : Record<TypeColum, string> = {

    Todo : 'gray' ,
    
    'In Progress' : 'orange',
    Review : 'green' ,
    closed : 'red',
    backlog : 'yellow'
}


function Column({ column} :{column : TypeColum}) {
let formdata : TasksModel = {content : '' , piriority :'' , category : '' , stage :'' , enddate : new Date() , authorId : 0  }
  const {
    register,
    handleSubmit,
   
    formState: { errors },
    reset,
 
  } = useForm()
  const onSubmit : SubmitHandler<any> = async (data) =>{
    
  try {
    formdata = data
    formdata.authorId
    =18 
    formdata.stage = column
    const parts = data.enddate.split('-');
    const date = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    formdata.enddate = date 
    console.log(formdata);

    const response = await axios.post('http://localhost:3333/api/tasks/create', formdata)
    console.log(response);
    window.location.reload();
    
  } catch (error) {
    console.log(error);
    
  }
    reset()
  }

  const {data , error , loading} = useFetch('http://localhost:3333/api/tasks')
  console.log(data);
  const { isOpen, onOpen, onClose } = useDisclosure()
    const {tasks , addEmptyTask , dropTaskFrom } = useColumnTasks(column)
    const {dropRef , isOver} = useColumnDrop(column,dropTaskFrom)
    const ColumnTasks = data?.map((task, index) => {
      if ((task.stage) === column) {
        return (
          <Task
            key={task.id}
            task={task}
            index={task.id}
            color="red"
            content={task.content}
          />
        );
      } else {
        return null;
      }
    });
  return (
    <Box>
    <Heading fontSize="md" mb={4} letterSpacing="wide">
        <Badge px={2} py={1} rounded="lg" backgroundColor={'#464646'} color={'white'}>

        {column}
        </Badge>

    </Heading>
    <IconButton
     size="25"
     w="full"
     color={useColorModeValue('white' , 'white.400')}
     bgColor={useColorModeValue('#AE0C35' , '#AE0C35')}
     _hover={{bgColor : useColorModeValue ('gray.200' , 'gray.600')}}
     py={2}
     variant="solid"
     colorScheme="black"
     aria-label="add-task"
     icon={<AddIcon/>}
   
     onClick={onOpen}
    
    
    />
    <Stack
    ref={dropRef}
    direction={{base : 'row' , md : 'column'}}
    h={{base : 300 , md : 1000}}
    p={4}
    mt={2}
    spacing={4}
    bgColor={useColorModeValue('gray.400' , 'gray.900')}
    rounded='lg'
    boxShadow="md"
    overflow="auto"
    opacity={isOver ? 0.85 : 1}
    
    
    
    >
    {ColumnTasks}
    </Stack>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
            <FormControl id="piriority">
              <FormLabel>Piriority</FormLabel>
              <Select placeholder='Select piriority' {...register('priority')} >
                <option value='LOW'>LOW</option>
                <option value="MEDUIM">NORMAL</option>
                <option value='HIGH'>HIGH</option>
                <option value='URGENT'>URGENT</option>
                
              </Select>
            </FormControl>
            <FormControl id="Category">
              <FormLabel>Category</FormLabel>
              <Select placeholder='Select Category' {...register('category')}>
                <option value='Semi Fini'>Semi Fini</option>
                <option value="Assemblage">Assemblage</option>
                <option value='Controle Electrique'>Controle Electrique</option>
                <option value='Foaming'>Foaming</option>
                <option value="Rework">Rework</option>
                <option value="Controle visuelle">Controle visuelle</option>
                
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>End Date</FormLabel>
              <Input type="date" {...register('enddate')}/>
                      </FormControl>
            <FormControl id="content">
            <FormLabel>Content</FormLabel>
              <Textarea {...register('content')}/>

              
            </FormControl>

            </form>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" bgColor={"green.300"} color={"white"} onClick={handleSubmit(onSubmit)}>Create</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>

      
    
  )
}

export default Column
