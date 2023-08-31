import { Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

const Box = () => {
  return (
    <>
    <Stack mb={3} >
    <TableContainer p= {0} border={'solid 1px'}  borderRadius={'10px'} borderColor={'gray.300'}>
  <Table variant={'striped'} size={'sm'}  >
    
    <Thead >
      <Tr >
        <Th >Deleted Task</Th>
        
      </Tr>
    </Thead>
    <Tbody >
      <Tr >
        <Td textAlign={'center'} fontSize={'xl'}>{localStorage.getItem('deleted_item')}</Td>
        
      </Tr>
     
    </Tbody>
   
  </Table>
</TableContainer>
</Stack>
</>
  )
}

export default Box