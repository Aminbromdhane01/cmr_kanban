import { DeleteIcon } from "@chakra-ui/icons"
import { CardBody , Card ,Image , Heading , Text , Stack , Divider , CardFooter, ButtonGroup, IconButton, Avatar , } from "@chakra-ui/react"
import getUserbyId from "../../hooks/getUserbyId"

type DCard = {
  content? : string 
  userid? : number
  stage? : string
  category? : string
  priority? : string
  enddate : Date | undefined| null
  deleteddate? : Date
}

const DeletedCard = ({content  ,userid, stage , category ,priority,enddate,deleteddate}:DCard ) => {

  return (
    <div style={{margin :'10px'}}>
    <Card maxWidth={'280px'} minHeight={"300px"} height={"full"} backgroundColor={'gray.100'}   >
  <CardBody>
   
    <Stack >
      <Heading size="md">Deleted By</Heading>
      <Stack direction={"row"} gap={2}>
     
      <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
      <h6 style={{paddingTop : "10px"}}>{getUserbyId(userid)?.username}</h6>
      </Stack>
      
        <h6 style={{marginBottom : 0 } } >Content :</h6>
        <Text>{content}</Text>
        <Stack direction={"row"} >
        <h6 >Category :</h6>
        <h6 style={{color :'gray'}}>{category }</h6>
        </Stack>
        <Stack direction={"row"} >
        <h6 >Stage :</h6>
        <h6 style={{color :'gray'}}>{stage} </h6>
        </Stack>
        <Stack direction={"row"} >
        <h6 >piriority :</h6>
        <h6 style={{color :'gray'}}>{priority }</h6>
        </Stack>
        <Stack direction={"row"} >
        <h6 >End Date :</h6>
        <h6 style={{color :'gray'}}>{enddate?.toLocaleString()} </h6>
        </Stack>
        <Stack direction={"row"} >
        <h6 >Delete Date</h6>
        <h6 style={{color :'gray'}}>{deleteddate?.toLocaleString().substring(0,10)} </h6>
        </Stack>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      
      <IconButton
  colorScheme='red'
  aria-label='Call Segun'
  size='lg'
  icon={<DeleteIcon />}
/>
      
      
    </ButtonGroup>
  </CardFooter>
</Card>
</div>
  )
}

export default DeletedCard