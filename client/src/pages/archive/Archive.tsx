import { SimpleGrid } from "@chakra-ui/react"
import Card from "../../components/deleted card/Card"
import { useEffect, useState } from "react"

import { axiosInstance, setAuthToken } from "../../config/axiosConfig"
type DeletedTask = {

    id : number ,
    Taskid: number,
    content: string,
    priority: string,
    category: string,
    stage: string,
    orderdate: Date,
    deletetIn: Date ,
    enddate: Date | null,
    authorId:number
} | null
const Archive = () => {
   
  const token = localStorage.getItem('token')
   const [getdata , setData] = useState<DeletedTask[]>()
   useEffect( ()  =>{
   
    const getData = async () => {
      setAuthToken(token)
        try {
            const response : any =  await axiosInstance.get('/api/deletedtask')
            
            setData(response.data)
            
            
        } catch (error) {
            
        }
         
    }
    
   getData();


   },[])
  



  
  
   
   

  return (
  <>
  <div style={{height : '50px', background :'#C40E3B', display : 'flex', justifyContent : 'center' , alignItems : 'center'}}>
    <h4 style={{color : 'black'}}>Deleted Items</h4>
  </div>
  
     <SimpleGrid columns = {{base : 2 , md :3 , lg:4 , xl :5 }} spacing={{base : 16 , md :1}} pt={6}  >
      {getdata?.map((task ) =>{
      
        return(
      <Card key={task?.id} content={task?.content} stage={task?.stage} category={task?.category} userid={task?.authorId} priority={task?.priority}  
      enddate={task?.enddate} deleteddate={task?.deletetIn}/> )}
      )}
   </SimpleGrid>
   </>
  )
}

export default Archive
