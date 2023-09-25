import { Grid, GridItem } from "@chakra-ui/react"
import './cards.css'
import { Charts } from "../chart/Charts"
import useFetch from "../../hooks/useFetch";




const Cards = () => {
  const {data , error , loading} = useFetch('http://127.0.0.1:3333/api/tasks')
  console.log(data);
  
  
  let NBR_RED = data?.filter(obj => obj.priority === "URGENT").length as number
  let NBR_ORANGE = data?.filter(obj => obj.priority === "HIGH").length as number
  let NBR_GREEN = data?.filter(obj => obj.priority === "LOW").length as number
  let NBR_BLUE = data?.filter(obj => obj.priority === "NORMAL").length as number
   
 


    
  return (
    <Grid templateColumns='repeat(4, 1fr)' 
    templateRows='repeat(2,fr)'
    gap={6} className="cards">
        <GridItem rowSpan={2} colSpan={2}><Charts/></GridItem>
       
  <GridItem w='80%' h='150'  className="card red" colSpan={1}>
    <div style={{background : 'rgba(255,183,208, 255)' , height : '100%', position: 'absolute', width :'6% ' , top :0, left:0 }} ></div>
    <h3 className="tip" >Urgent</h3> <h4 className="second-text">{NBR_RED}</h4>
  </GridItem>
  
  <GridItem w='80%' h='150' className="card orange" colSpan={1}>
  <div style={{background : 'rgba(255,239,185, 255)' , height : '100%', position: 'absolute', width :'6% ' , top :0, left:0 }} ></div>
    <h3 className="tip">High</h3> <h4 className="second-text">{NBR_ORANGE }</h4>
  </GridItem>
  <GridItem w='80%' h='150' className="card blue " colSpan={1}>
  <div style={{background : 'rgba(209,245,255, 255)' , height : '100%', position: 'absolute', width :'6% ' , top :0, left:0 }} ></div>
    <h3 className="tip">Normal</h3> <h4  className="second-text">{NBR_GREEN}</h4>
  </GridItem>
  <GridItem w='80%' h='150'  className="card green" colSpan={1}>
  <div style={{background : 'rgba(222,255,203, 255)' , height : '100%', position: 'absolute', width :'6% ' , top :0, left:0 }} ></div>
    <h3 className="tip">Low</h3> <h4  className="second-text">{NBR_BLUE}</h4>
  </GridItem>
</Grid>
  )
}

export default Cards