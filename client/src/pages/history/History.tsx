import { Flex, Table ,TableCaption, TableContainer, Tbody, Td,  Th, Thead, Tr } from '@chakra-ui/react'

import React from 'react'

const History : React.FC = () => {
  return (
    <Flex justifyContent={'center'} padding={2}>
    <TableContainer border={'solid 1px '} width={'90%'} >
  <Table variant='simple' >
    <TableCaption>Task History</TableCaption>
    <Thead backgroundColor={'#AC0C34'} >
      <Tr >
        <Th color={'white'}>By</Th>
        <Th color={'white'}>Description</Th>
        <Th color={'white'}>Date</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Zakiya</Td>
        <Td>From TODO to INPROGRESS</Td>
        <Td >13/05/2023</Td>
      </Tr>
      <Tr>
        <Td>Ahmed</Td>
        <Td>Deleted</Td>
        <Td >15/05/2023</Td>
      </Tr>
      
    </Tbody>
   
  </Table>
</TableContainer>
</Flex>
  )
}

export default History