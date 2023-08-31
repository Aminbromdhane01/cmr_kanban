import { Grid, GridItem } from "@chakra-ui/react"
import './cards.css'
import { Charts } from "../chart/Charts"
import  { useState, useEffect } from 'react';
const NBR_RED = 50 ;
const NBR_ORANGE = 100 ;
const NBR_GREEN = 103 ;
const NBR_BLUE = 50 ;


const Cards = () => {

    const [RedCount, setRedCount] = useState(0);
    const [OrangeCount, setOrangeCount] = useState(0);
    const [GreenCount, setGreenCount] = useState(0);
    const [BlueCount, setBlueCount] = useState(0);

  useEffect(() => {
    const increaseUserCount = () => {
      if (RedCount < NBR_RED ) {
        setRedCount(RedCount + 1);
      } 
      if (OrangeCount < NBR_ORANGE ) {
        setOrangeCount(OrangeCount + 1);
      }
      if (GreenCount < NBR_GREEN ) {
        setGreenCount(GreenCount + 1);
      }
      if (BlueCount < NBR_BLUE ) {
        setBlueCount(BlueCount + 1);
      }
    };

    const interval = setInterval(increaseUserCount, 5);

    return () => clearInterval(interval);
  }, [RedCount , BlueCount , GreenCount, GreenCount]);

 


    
  return (
    <Grid templateColumns='repeat(4, 1fr)' 
    templateRows='repeat(2,fr)'
    gap={6} className="cards">
        <GridItem rowSpan={2} colSpan={2}><Charts/></GridItem>
       
  <GridItem w='80%' h='150' bg='rgba(255,183,208, 255)' className="card red" colSpan={1}>
    <h3 className="tip" >Urgent</h3> <h4 className="second-text">{RedCount}</h4>
  </GridItem>
  
  <GridItem w='80%' h='150' bg='rgba(255,239,185, 255)' className="card orange" colSpan={1}>
    <h3 className="tip">High</h3> <h4 className="second-text">{OrangeCount}</h4>
  </GridItem>
  <GridItem w='80%' h='150' bg='rgba(209,245,255, 255)' className="card blue " colSpan={1}>
    <h3 className="tip">Normal</h3> <h4  className="second-text">{BlueCount}</h4>
  </GridItem>
  <GridItem w='80%' h='150' bg='rgba(222,255,203, 255)' className="card green" colSpan={1}>
    <h3 className="tip">Low</h3> <h4  className="second-text">{GreenCount}</h4>
  </GridItem>
</Grid>
  )
}

export default Cards