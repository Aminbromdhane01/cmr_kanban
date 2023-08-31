import { DeleteIcon, EditIcon, InfoIcon } from "@chakra-ui/icons";
import { TaskModel } from "../utils/models"
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box , Button, Heading, IconButton , Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Textarea, useDisclosure } from "@chakra-ui/react";
import { useTaskDragAndDrop } from "../hooks/useTaskDragAndDop";
import { Avatar} from '@chakra-ui/react'
import './Task.css'
import React, { useEffect, useState } from "react";
import Profiledetails from "./usedeatail/Details";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'


type TaskProps = {
    index: number ,
    task : TaskModel , 
    
}

function Task({ index , task } : TaskProps) { 
  const  { isOpen, onOpen, onClose } = useDisclosure()
  const  { isOpen : isOpenModel , onOpen : onOpenModel, onClose : onCloseModel} = useDisclosure()
  const cancelRef = React.useRef<HTMLInputElement>(null)  

  const {ref , isDragging} = useTaskDragAndDrop<HTMLDivElement>({
    task , index }
  );
  console.log(task.title);
  const [data , setdata] = useState<any>()


  useEffect(() => {
    
   console.log(localStorage.getItem('tasks'));
   setdata(localStorage.getItem('tasks'))
   console.log(data);
   
    
   
   
  },[]);  

  const deleteItem = (todelete_id : string) => {
    
    interface Task {
      id: string;
      title: string;
      color: string;
      column: string;
    }
    
    interface JsonData {
      [key: string]: Task[];
    }
    
    // Your JSON data in string form
    const jsonDataString = localStorage.getItem('tasks')
   
    
    
   
    
    // Parse the JSON data string into a JavaScript object
    const jsonData: JsonData = JSON.parse(jsonDataString|| '{}');
    
    let taskFound = false;
    
    // Iterate through each column in the JSON data
    for (const column in jsonData) {
      const taskIndex = jsonData[column].findIndex(task => task.id === todelete_id);
      
      if (taskIndex !== -1) {
        jsonData[column].splice(taskIndex, 1);
        taskFound = true;
        console.log(`Task with ID ${todelete_id} deleted from column ${column}.`);
        const modifiedJsonDataString = JSON.stringify(jsonData, null, 2);

        console.log(modifiedJsonDataString);
        localStorage.setItem('tasks', modifiedJsonDataString)
        const number : number = parseInt(localStorage.getItem('deleted_item') || '{}') +1
        localStorage.setItem('deleted_item', number.toString() )
        setTimeout(() => {
          window.location.reload();
      }, 100);
        break; // Exit the loop after finding and deleting the task
      }
    }
    
    if (!taskFound) {
      console.log(`Task with ID ${todelete_id} not found.`);
    }
    
    // Convert the modified JavaScript object back into a JSON string
    
    // Display the updated JSON data string
   
    


  }
  return (
   <Box
   
   ref={ref}
   as="div"
  
   position="relative"
   
   w="100%"
   h="150px"
   pl={3}
   pr={3}
   pt={3}
   pb={1}
   
   boxShadow="xl"
   cursor= "grab"
   bgColor="white">
   
    <Box className="bar"
    bgColor={task.color}>


    </Box>
    <Stack direction={'column'} 
     position="absolute"
     top={0}
     right={0}
     gap={0}>
      <Link to={'/history/1'}>
    <IconButton  
    
   
    zIndex={100}
    aria-label="delete"
    size="md"
    colorScheme="solid"
    color="gray.700"
    icon={<InfoIcon/>}
    opacity={isDragging ? 0.5 : 0}
   _hover={{ opacity: 1 }}


    />
    </Link>
    <IconButton  
    
   
    zIndex={100}
    aria-label="delete"
    size="md"
    colorScheme="solid"
    color="gray.700"
    icon={<EditIcon/>}
    opacity={isDragging ? 0.5 : 0}
   _hover={{ opacity: 1 }}


    />
    <IconButton  
    onClick={onOpen}
   
    zIndex={100}
    aria-label="delete"
    size="md"
    colorScheme="solid"
    color="gray.700"
    icon={<DeleteIcon/>}
    opacity={isDragging ? 0.5 : 0}
   _hover={{ opacity: 1 }}


    />
    </Stack>
    
    <Textarea
    value={task.title}
    fontWeight="semibold"
    cursor= "inherit"
    border= "none"
    p={0}
    pl = {1}
    m={2}
    resize="none"
    minH={70}
    maxH={200}
    focusBorderColor="none"
    color="gray.700"
    
    />

<Stack direction="row" position={"absolute"} bottom={1} left={4}><Avatar size='xs' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' onClick={onOpenModel}/>
<Heading fontWeight={"semibold"} size={"xs"} pt={1}

>Name</Heading>
</Stack>
<AlertDialog
        isOpen={isOpen}
       leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Task
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button  onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={() => 
              {
                onClose;
                deleteItem(task.id);
              }} ml={3} >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Modal isOpen={isOpenModel} onClose={onCloseModel}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Profiledetails username="Name" email="Name@gmail.com" image="https://bit.ly/kent-c-dodds" />
          </ModalBody>

          <ModalFooter>
            <Button backgroundColor='#AE0C35' color={'white'} mr={3} onClick={onCloseModel}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
   </Box>
  )
}

export default Task
