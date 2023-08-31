import {
    Table,
    Thead,
    Tbody,
    
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    IconButton 
  } from '@chakra-ui/react'
  import { DeleteIcon , EditIcon } from "@chakra-ui/icons";
  

function Userlist() {
  return (
    <TableContainer>
    <Table variant='simple'>
      <TableCaption>Team Members</TableCaption>
      <Thead>
        <Tr>
          <Th>Production Line</Th>
          <Th>Monitor Name</Th>
          <Th>Email</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Kitting Store</Td>
          <Td>Kamel</Td>
          <Td>Kamel@gmail.com</Td>
          <Td>Active</Td>
          <Td></Td>
        </Tr>
        <Tr>
        <Td>Kitting Store</Td>
          <Td>Kamel</Td>
          <Td>Kamel@gmail.com</Td>
          <Td>Active</Td>
          <Td> <IconButton
          icon={<DeleteIcon/>}
          aria-label="delete"
          color={"red"}
          mr={5}
          right={0}

          
          /> 
          <IconButton
          icon={<EditIcon/>}
          aria-label="delete"
          color={"blue"}
        

          
          />
          </Td>
        </Tr>
        <Tr>
        <Td>Kitting Store</Td>
          <Td>Kamel</Td>
          <Td>Kamel@gmail.com</Td>
          <Td>Active</Td>
        </Tr>
      </Tbody>
    
    </Table>
  </TableContainer>
  )
}

export default Userlist
