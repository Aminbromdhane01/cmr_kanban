
import { Container , Grid, GridItem, SimpleGrid, Stack} from '@chakra-ui/react'
import Column from '../components/Column'
import { TypeColum } from '../utils/enum'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import FMenu from '../components/filter/by_user/FMenu'
import SMenu from '../components/filter/by_stage/SMenu'
import Box from '../components/deletedbox/Box'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'




function Dashboard() {
  const  {category } : any  = useParams();

  const {data , error , loading} = useFetch('http://localhost:3333/api/tasks//find/'+category)

  return (
    <>

    
      <Container maxWidth="full" px={4} py={10} >
        <Grid templateColumns='repeat(15, 1fr)'>
          <GridItem>
       <Stack direction={'row'}>
        <FMenu/>
        <SMenu/>
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
