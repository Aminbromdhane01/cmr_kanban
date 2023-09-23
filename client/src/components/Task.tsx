import { DeleteIcon, EditIcon, InfoIcon } from "@chakra-ui/icons";
import { TaskModel } from "../utils/models"
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box , Button, FormControl, FormLabel, Heading, IconButton , Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Textarea, useDisclosure } from "@chakra-ui/react";
import { useTaskDragAndDrop } from "../hooks/useTaskDragAndDop";
import { Avatar} from '@chakra-ui/react'
import './Task.css'
import React, { useEffect, useState } from "react";
import Profiledetails from "./usedeatail/Details";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";


type TaskProps = {
    index: number ,
    task : TaskModel , 
    content : string ,
    category : string ,
    color : string ,
    
}

function Task({ index , task , content , color , category} : TaskProps ) { 

  const  { isOpen, onOpen, onClose } = useDisclosure()
  const  { isOpen : isOpenModel , onOpen : onOpenModel, onClose : onCloseModel} = useDisclosure()
  const  { isOpen : isOpenUpdate , onOpen : onOpenUpdate, onClose : onCloseUpdate} = useDisclosure()
  const cancelRef = React.useRef<HTMLInputElement>(null)  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
 
  } = useForm()
  const Updatetask = async (id : string , userid : string , data : any) => {
    try {
      const response = await axios.patch('http://127.0.0.1:3333/api/tasks/update/'+id+'/'+userid , data)
      console.log(response);
      
    } catch (error) {
      console.log(error);
      
    }
   }
     const [updatedData , setdata] = useState<any>() ;
    let formdata : any = {}
    
  const onSubmit : SubmitHandler<any> =  (data) =>{
    try {
      console.log(data);
      
      if (data.content != '' ) formdata.content = data.content
      if (data.priority != '' ) formdata.priority = data.priority
      if (data.category != '' ) formdata.category = data.category
      if (data.stage != '' ) formdata.stage = data.stage
      console.log(formdata);
      if (data.enddate != ''){
      const parts = data.enddate.split('-');
      const date = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
      formdata.enddate = date }
      
      Updatetask(index.toString(), userid.toString() , formdata)    
      reset();  
      window.location.reload();
          
          
         } catch (error) {
          console.log(error);
          
      
    }
  
  }


  

  const {ref , isDragging} = useTaskDragAndDrop<HTMLDivElement>({
    task , index }
  );
  const userid = 20
  const deletetask = async (id : string , userid : string) =>{
    try {
      const response = await axios.delete('http://127.0.0.1:3333/api/tasks/delete/'+id+'/'+userid)
      console.log(response);
      
    } catch (error) {
      console.log(error);
      
    }
    

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
    bgColor={color}>


    </Box>
    <Stack direction={'column'} 
     position="absolute"
     top={0}
     right={0}
     gap={0}>
      <Link to={'/history/'+index}>
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
   onClick={onOpenUpdate}


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
    value={content + '\n \n ' + category}
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
                deletetask(index.toString() , userid.toString())
                window.location.reload();
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
      <Modal isOpen={isOpenUpdate} onClose={onCloseUpdate}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
            <FormControl id="piriority">
              <FormLabel>Piriority</FormLabel>
              <Select placeholder='Select piriority' {...register('priority')}  >
                <option value='LOW'>LOW</option>
                <option value="MEDUIM">NORMAL</option>
                <option value='HIGH'>HIGH</option>
                <option value='URGENT'>URGENT</option>
                
              </Select>
            </FormControl>
            <FormControl id="Category">
              <FormLabel>Category</FormLabel>
              <Select placeholder='Select Category' {...register('category')} >
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
              <Input type="date" {...register('enddate')} />
                      </FormControl>
                      <FormControl id="stage">
              <FormLabel>Stage</FormLabel>
              <Select placeholder='Select Stage'  {...register('stage')}>
                <option value='backlog'>Backloag</option>
                <option value="Todo">Todo</option>
                <option value='In Progress'>In Progress</option>
                <option value='Review'>Review</option>
                <option value='Closed'>Closed</option>
               
                
              </Select>
            </FormControl>

            <FormControl id="content">
            <FormLabel>Content</FormLabel>
            
  <Textarea  {...register('content')  } />


              
            </FormControl>

            </form>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onCloseUpdate}>
              Close
            </Button>
            <Button variant="ghost" bgColor={"green.300"} color={"white"} onClick={handleSubmit(onSubmit)  }>Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
   </Box>
  )
}

export default Task
