import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
   
    
    Box
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button } from 'evergreen-ui'
import { Link } from 'react-router-dom'

const SMenu : React.FC = () => {
  return (
    <Box pt={3} pb={4}>
    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Filter By Categories
      </MenuButton>
  <MenuList>
  <Link to={'/dashboard/all'}>
     <MenuItem minH='48px'>
     
     <span>All Tasks</span>
   </MenuItem>
   </Link>
   
     <Link to={'/dashboard/semi fini'}>
     <MenuItem minH='48px'>
     
     <span>Semi Fini</span>
   </MenuItem>
   </Link>
   <Link to={'/dashboard/assemblage'}>
   <MenuItem minH='48px'>
     
     <span>Assemblage</span>
   </MenuItem>
   </Link>
   <Link to={'/dashboard/controle Electrique'}>
   <MenuItem minH='48px'>
     
     <span>Controle Electrique</span>
   </MenuItem>
   </Link>
   <Link to={'/dashboard/foaming'}>
   <MenuItem minH='48px'>
     
     <span>Foaming</span>
   </MenuItem>
   </Link>
   <Link to={'/dashboard/rework'}>
   <MenuItem minH='48px'>
     
     <span>Rework</span>
   </MenuItem>
   </Link>
   <Link to={'/dashboard/controle visuelle'}>
   <MenuItem minH='48px'>
     
     <span>Controle Visuelle</span>
   </MenuItem>
   </Link>

  

  </MenuList>
</Menu>
</Box>
  )
}

export default SMenu