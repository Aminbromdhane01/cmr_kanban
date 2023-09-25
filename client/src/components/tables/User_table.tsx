import { Box } from "@chakra-ui/react"
import useFetch from "../../hooks/useFetch"

const User_table = () => {

  const {data , error , loading} = useFetch('http://localhost:3333/api/users')
  console.log(data);
  
  
  return (
    <div className="col-lg-12 grid-margin stretch-card">
    <div className="card" style={{borderRadius : '0px'}}>
      <div className="card-body">
        <h4 className="card-title">Team</h4>
        
       
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th> User </th>
                <th> Name </th>
                <th> Production Line </th>
                <th> Active </th>
                <th></th>
              
               
              </tr>
            </thead>
            <tbody>
              {data?.map(member =>(
               <tr>
              <td  >
                          <img  src={`http://127.0.0.1:3333/api/images/${member.picture}`} alt="user icon"  style={{width : '40px' , height: '40px' , borderRadius : '50px'}} />
            </td>
            <td> {member.email} </td>
            <td>
               {member.productionLine}
           </td>
           <td> <Box h={"13px"}
            w={"13px"}
            borderRadius={"50px"}
            backgroundColor={member.isActive ? "#7fdb63" : "red" }
            marginLeft={3.5}
            marginTop={3}
            
           
           ></Box> </td>
           <td>
            
           </td>
        
            </tr>
              ))}
             
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default User_table