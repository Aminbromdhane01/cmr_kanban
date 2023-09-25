import { Flex, Table ,TableCaption, TableContainer, Tbody, Td,  Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import getUpdatedTask from '../../hooks/getUpdatedTask'
import Row from '../../components/historyRow/Row'
import { useParams } from 'react-router-dom'

const History : React.FC = () => {
  const  {id } : any  = useParams();
const data :any[] = getUpdatedTask(parseInt(id))
console.log(data);


  return (
    <Flex justifyContent={'center'} padding={2}>
    <TableContainer border={'solid 1px '} width={'90%'} >
  <Table variant='simple' >
    <TableCaption>Task History</TableCaption>
    <Thead backgroundColor={'#AC0C34'} >
      <Tr >
        <Th color={'white'}>By</Th>
        <Th color={'white'}>content</Th>
        <Th color={'white'}>piriority</Th>
        <Th color={'white'}>category</Th>
        <Th color={'white'}>stage</Th>
        <Th color={'white'}>orderdate</Th>
        <Th color={'white'}>orderdate</Th>

        <Th color={'white'}>updated in</Th>

      </Tr> 
    </Thead>
    <Tbody>
      
    { data != null && data.map((row, index) => (
          <Row key={row.id} content={row.content} userid={row.authorId} priority={row.priority} category={row.category}
          stage={row.stage} enddate={row.enddate} updatedate={row.updatedate} orderdate={row.orderdate}/>
          ))}
      
    </Tbody>
   
  </Table>
</TableContainer>
</Flex>
  )
}

export default History