import React, { useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
   
    Image,
    Box,
    Select
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button } from 'evergreen-ui'
import members from '../../../utils/members'
const FMenu : React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleMenuItemClick = (value : any) => {
    setSelectedValue(value); // Update the selected value when a MenuItem is clicked
  };
  return (
    <Box pt={3} pb={4}>
   
    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
  {selectedValue || "Filter By User"}
      </MenuButton>
  <MenuList>
   
   <MenuItem onClick={() => handleMenuItemClick('All Users')}>All Users</MenuItem>
   {members.map(member =>(
     <MenuItem minH='48px' value={member.id}  onClick={() => handleMenuItemClick(member.username)}>
     <Image
       boxSize='2rem'
       borderRadius='full'
       src={`http://127.0.0.1:3333/uploads/${member.image}`}
     
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