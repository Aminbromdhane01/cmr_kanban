import { Td, Tr } from '@chakra-ui/react'
import useUserById from '../../hooks/getUserbyId'

type Updated = {
    userid? : number
    category? : string
    priority? : string
    content? :string
    stage? : string
    enddate? : Date
    orderdate? : Date
    updatedate? : Date
} 

const Row = ({userid , category ,priority, content , stage , enddate , orderdate ,updatedate} : Updated) => {

  return (
    <>
    <Tr>  
    <Td>{useUserById(userid)?.username}</Td>
    <Td>{content}</Td>
    <Td>{priority}</Td>
    <Td>{category}</Td>
    <Td >{stage}</Td>
    <Td>{enddate?.toLocaleString().substring(0,10)}</Td>
    
    <Td >{orderdate?.toLocaleString().substring(0,10)}</Td>
    

    <Td >{updatedate?.toLocaleString().substring(0,10)}</Td>
  </Tr>
  </>
  )
}

export default Row