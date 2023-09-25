import { ProgressBar } from "react-bootstrap"
import projects from "../../utils/projects"
import useFetch from "../../hooks/useFetch"
import { Box } from "@chakra-ui/react"

const Project_table = () => {

  const {data , error , loading} = useFetch('http://localhost:3333/api/projects')
  console.log(data);

  
  
  return (
    <div className="col-lg-12 grid-margin stretch-card" >
    <div className="card" style={{borderRadius : '0px'}}>
      <div className="card-body">
        <h4 className="card-title">Projects</h4>
        
     
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th> Name </th>
                <th> Client Name</th>
                <th> Production Unit </th>
                <th> IsPresent </th>
               
              </tr>
            </thead>
            <tbody>
             {data?.map(project =>(
                <tr>
                <td> {project.Name} </td>
                <td> {project.ClientName} </td>
                <td> {project.ProductionUnit} </td>
                <td>
                <Box h={"13px"}
            w={"13px"}
            borderRadius={"50px"}
            backgroundColor={project.isPresent ? "#7fdb63" : "red" }
            marginLeft={3.5}
            marginTop={3}
            
           
           ></Box>
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

export default Project_table