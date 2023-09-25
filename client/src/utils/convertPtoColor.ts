function Convert(value: string)  {

 switch(value){
  case 'URGENT' :
    return 'red'
  case 'LOW' :
    return 'green'  
  case 'HIGH' :
    return 'yellow'
  case 'NORMAL' :
    return 'blue'    
    
 }

}

export default Convert