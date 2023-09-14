import { SimpleGrid } from "@chakra-ui/react"
import Card from "../../components/deleted card/Card"
import { useEffect, useState } from "react"
import axios from "axios"
import getUserbyId from "../../hooks/getUserbyId"
type DeletedTask = {

    id : number ,
    Taskid: number,
    content: string,
    priority: string,
    category: string,
    stage: string,
    orderdate: Date,
    deletedat: Date ,
    enddate: Date | null,
    deletedby:number
} | null
const Archive = () => {
   

   const [getdata , setData] = useState<DeletedTask[]>()
   useEffect( ()  =>{
    const getData = async () => {
        try {
            const response : any =  await axios.get('http://127.0.0.1:3333/api/deletedtask')
            
            setData(response.data)
            
            
        } catch (error) {
            
        }
         
    }
    
   getData();


   },[])
  


  console.log(getUserbyId(15)?.username);
  
  
   
   

  return (
  
     <SimpleGrid columns = {{base : 2 , md :3 , lg:4 , xl :5 }} spacing={{base : 16 , md :1}}  >
      {getdata?.map((task ) =>{
      
        return(
      <Card key={task?.id} content={task?.content} stage={task?.stage} category={task?.category} userid={task?.deletedby} priority={task?.priority}  
      enddate={task?.enddate} deleteddate={task?.deletedat}/> )}
      )}
   </SimpleGrid>
  )
}

export default Archive
