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

const SMenu : React.FC = () => {
  return (
    <Box pt={3} pb={4}>
    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Filter By Categories
      </MenuButton>
  <MenuList>
   
   
   
     <MenuItem minH='48px'>
     
     <span>Semi Fini</span>
   </MenuItem>
   <MenuItem minH='48px'>
     
     <span>Assemblage</span>
   </MenuItem>
   <MenuItem minH='48px'>
     
     <span>Controle Electrique</span>
   </MenuItem>
   <MenuItem minH='48px'>
     
     <span>Foaming</span>
   </MenuItem>
   <MenuItem minH='48px'>
     
     <span>Rework</span>
   </MenuItem>
   <MenuItem minH='48px'>
     
     <span>Controle Visuelle</span>
   </MenuItem>

  

  </MenuList>
</Menu>
</Box>
  )
}

export default SMenu