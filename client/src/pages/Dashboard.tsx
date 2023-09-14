
import { Container , Grid, GridItem, SimpleGrid, Stack} from '@chakra-ui/react'
import Column from '../components/Column'
import { TypeColum } from '../utils/enum'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import FMenu from '../components/filter/by_user/FMenu'
import SMenu from '../components/filter/by_stage/SMenu'
import Box from '../components/deletedbox/Box'




function Dashboard() {
    

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
          <Column column={TypeColum.BACKLOG}></Column>
          <Column column={TypeColum.TO_DO}></Column>
          <Column column={TypeColum.IN_PROGRESS}></Column>
          <Column column={TypeColum.TO_REVIEW}></Column>
          <Column column={TypeColum.CLOSED}></Column>
          
         
        </SimpleGrid>
        </DndProvider>
      </Container>
    </>
  )
}

export default Dashboard
