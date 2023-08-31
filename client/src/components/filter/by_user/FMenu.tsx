import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
   
    Image,
    Box
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button } from 'evergreen-ui'
import members from '../../../utils/members'
const FMenu : React.FC = () => {
  return (
    <Box pt={3} pb={4}>
    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Filter By User
      </MenuButton>
  <MenuList>
   
   
   {members.map(member =>(
     <MenuItem minH='48px'>
     <Image
       boxSize='2rem'
       borderRadius='full'
       src={member.image}
       alt='Fluffybuns the destroyer'
       mr='12px'
     />
     <span>{member.username}</span>
   </MenuItem>

   ))}
  </MenuList>
</Menu>
</Box>
  )
}

export default FMenu