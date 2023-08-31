
import { AddIcon } from "@chakra-ui/icons";
import { Box , Stack , Heading , Badge , IconButton , useColorModeValue} from "@chakra-ui/react";

import Task from "./Task";
import useColumnTasks from "../hooks/useColumnTasks";
import { TypeColum } from "../utils/enum";
import useColumnDrop from "../hooks/useColumnDrop";
const ColumnColorScheme : Record<TypeColum, string> = {

    Todo : 'gray' ,
    
    'In Progress' : 'orange',
    Review : 'green' ,
    closed : 'red',
    backlog : 'yellow'
}


function Column({ column} :{column : TypeColum}) {
    const {tasks , addEmptyTask , dropTaskFrom } = useColumnTasks(column)
    const {dropRef , isOver} = useColumnDrop(column,dropTaskFrom)
    const ColumnTasks = tasks.map((task , index)=>{
      return  <Task key={task.id} task={task} index={index} />
    })
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
     onClick={addEmptyTask}
    
    
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


    </Box>

      
    
  )
}

export default Column
