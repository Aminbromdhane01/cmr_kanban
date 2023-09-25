
import { Container , Grid, GridItem, SimpleGrid, Stack ,Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
 
  
  } from '@chakra-ui/react'
  import { Button } from 'evergreen-ui'
  import { ChevronDownIcon } from '@chakra-ui/icons'

import Column from '../components/Column'
import { TypeColum } from '../utils/enum'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import FMenu from '../components/filter/by_user/FMenu'
import SMenu from '../components/filter/by_stage/SMenu'
import Box from '../components/deletedbox/Box'
import useFetch from '../hooks/useFetch'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import useUserById from '../hooks/getUserbyId'
import getProjectById from '../hooks/getProjetbyId'




function Dashboard() {
  const  {category } : any  = useParams();
  const [selectedValue, setSelectedValue] = useState("");
  const [filteruser , setFilterUser] = useState("");
  const [filterproject , setfilterproject] = useState("");

  
  const handleMenuItemClick = (value : any) => {
    setSelectedValue(value); // Update the selected value when a MenuItem is clicked
  };

  const {data , error , loading} = useFetch(`http://localhost:3333/api/tasks?category=${selectedValue}&project_id=${filterproject}&user_id=${filteruser}`)
  const {data : user , error : err , loading : load }= useFetch('http://localhost:3333/api/users')
  const {data : projects , error : errors , loading : loadin }= useFetch('http://localhost:3333/api/projects')
  console.log(projects);
  
   

  return (
    <>

    
      <Container maxWidth="full" px={4} py={10} >
        <Grid templateColumns='repeat(15, 1fr)'>
          <GridItem>
       <Stack direction={'row'}>
        <div style={{paddingTop : '12px'}}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>{getProjectById(parseInt(filterproject))?.Name  ?? 'Filter By Project'}</MenuButton>
          <MenuList>
          <MenuItem minH='48px' onClick={() => setfilterproject('')}>
     
     <span>All Projects</span>
   </MenuItem>
          {projects?.map(project =>(
     <MenuItem minH='48px' value={project.id} onClick={()=>{setfilterproject(project.id)}} >
    
     <span>{project.Name}</span>
   </MenuItem>

   ))}
          </MenuList>
        </Menu>
        </div>
        <div style={{paddingTop : '12px'}}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {useUserById(parseInt(filteruser))?.username ?? 'Filter By User'}</MenuButton>
          <MenuList>
          <MenuItem minH='48px' onClick={() => setFilterUser('')}>
     
     <span>All Users</span>
   </MenuItem>
          {user?.map(member =>(
     <MenuItem minH='48px' value={member.id} onClick={()=>{setFilterUser(member.id)}} >
   <Image
       boxSize='2rem'
       borderRadius='full'
       src={`http://127.0.0.1:3333/api/images/${member.picture}`}
     
       mr='12px'
       
     />
     <span>{member.username}</span>
   </MenuItem>

   ))}
          </MenuList>
        </Menu>
        </div>
        <Stack pt={3} pb={4}>
    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
  {selectedValue || "Filter By Categories"}
      </MenuButton>
  <MenuList>
 
     <MenuItem minH='48px' onClick={() => handleMenuItemClick('')}>
     
     <span>All Tasks</span>
   </MenuItem>
   
   
   
     <MenuItem minH='48px' onClick={() => handleMenuItemClick('Semi Fini')}>
     
     <span>Semi Fini</span>
   </MenuItem>
   
  
   <MenuItem minH='48px' onClick={() => handleMenuItemClick('Assemblage')}>
     
     <span>Assemblage</span>
   </MenuItem>
  

   <MenuItem minH='48px' onClick={() => handleMenuItemClick('Controle Electrique')}>
     
     <span>Controle Electrique</span>
   </MenuItem>
   
   
   <MenuItem minH='48px' onClick={() => handleMenuItemClick('Foaming')}>
     
     <span>Foaming</span>
   </MenuItem>
 
  
   <MenuItem minH='48px' onClick={() => handleMenuItemClick('Rework')}>
     
     <span>Rework</span>
   </MenuItem>
 
  
   <MenuItem minH='48px' onClick={() => handleMenuItemClick('Controle Visuelle')}>
     
     <span>Controle Visuelle</span>
   </MenuItem>
   

  

  </MenuList>
</Menu>
</Stack>
        </Stack>
        </GridItem>
        <GridItem colStart={15} >
        <Box/>
        </GridItem>
        </Grid>
       
        <DndProvider backend={HTML5Backend}>
        <SimpleGrid columns = {{base : 1 , md :5}} spacing={{base : 16 , md :1}}  >
          <Column column={TypeColum.BACKLOG} taskdata={data} ></Column>
          <Column column={TypeColum.TO_DO} taskdata={data}></Column>
          <Column column={TypeColum.IN_PROGRESS} taskdata={data}></Column>
          <Column column={TypeColum.TO_REVIEW} taskdata={data}></Column>
          <Column column={TypeColum.CLOSED} taskdata={data}></Column>
          
         
        </SimpleGrid>
        </DndProvider>
      </Container>
    </>
  )
}

export default Dashboard
